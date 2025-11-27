require("colors");

var http = require("http");
var express = require("express");
var bodyParser = require("body-parser")
var mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;
const uri = 'mongodb://localhost:27017';
const client = new MongoClient(uri, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
});

var app = express();
app.use(express.static("./public"));
app.use(bodyParser.urlencoded({extended: false }))
app.use(bodyParser.json())
app.set('view engine', 'ejs')
app.set('views', './views');

var server = http.createServer(app);
server.listen(3000);

console.log("Servidor rodando na porta 80...".rainbow);

// Variáveis globais para o banco
var dbo, usuarios, carros;

// Conectar ao MongoDB quando o servidor iniciar
client.connect(function(err) {
    if (err) {
        console.log("Erro ao conectar ao MongoDB:".red, err);
        return;
    }
    console.log("Conectado ao MongoDB com sucesso!".green);
    
    dbo = client.db("gerencia_carros");
    usuarios = dbo.collection("usuarios");
    carros = dbo.collection("carros");
    
    // Inserir alguns carros de exemplo se a coleção estiver vazia
    carros.countDocuments({}, function(err, count) {
        if (err) {
            console.log("Erro ao verificar carros:".red, err);
            return;
        }
        
        if (count === 0) {
            console.log("Inserindo carros de exemplo...".yellow);
            var carrosExemplo = [
                { marca: "Toyota", modelo: "Corolla", ano: 2023, qtde_disponivel: 5 },
                { marca: "Honda", modelo: "Civic", ano: 2023, qtde_disponivel: 3 },
                { marca: "Volkswagen", modelo: "Golf", ano: 2022, qtde_disponivel: 2 },
                { marca: "Ford", modelo: "Focus", ano: 2023, qtde_disponivel: 4 },
                { marca: "Chevrolet", modelo: "Onix", ano: 2023, qtde_disponivel: 6 }
            ];
            
            carros.insertMany(carrosExemplo, function(err, result) {
                if (err) {
                    console.log("Erro ao inserir carros exemplo:".red, err);
                } else {
                    console.log("Carros de exemplo inseridos com sucesso!".green);
                }
            });
        } else {
            console.log(`Já existem ${count} carros no banco.`.blue);
        }
    });
});

app.get('/', function(requisicao, resposta){
    resposta.redirect('/projects.html');
})

// Rota para projects.html
app.get('/projects.html', function(requisicao, resposta){
    resposta.sendFile(__dirname + '/public/projects.html');
});

// Rotas existentes (mantidas do código original)
app.get('/cadastrar',function(requisicao, resposta){
    console.log('Requisição recebida por get');
    let nome = requisicao.query.nome;
    let email = requisicao.query.email;
    let telefone = requisicao.query.telefone;
    let nascimento = requisicao.query.nascimento;
    console.log(nome, email, telefone, nascimento)
    resposta.render('resposta.ejs', {metodo:"GET", nome, email, telefone, nascimento});
})

app.post('/cadastrar',function(requisicao, resposta){
    console.log('Requisição recebida por post');
    let nome = requisicao.body.nome;
    let email = requisicao.body.email;
    let telefone = requisicao.body.telefone;
    let nascimento = requisicao.body.nascimento;
    console.log(nome, email, telefone, nascimento)
    resposta.render('resposta.ejs', {metodo:"POST", nome, email, telefone, nascimento});
})

app.get('/for', function(requisicao, resposta){
    let qtde = requisicao.query.qtde;
    console.log(qtde);
    resposta.render('for.ejs', {qtde})
})

////////////////////////////////////////////// 
// GERÊNCIA DE USUÁRIOS (FLUXO INICIAL)
////////////////////////////////////////////// 

app.post("/cadastrar_usuario", function(req, resp) {
    if (!usuarios) {
        return resp.render('resposta_usuario', {resposta: "Banco de dados não conectado!"});
    }
    
    var data = { 
        db_nome: req.body.nome, 
        db_login: req.body.login, 
        db_senha: req.body.senha 
    };

    usuarios.insertOne(data, function (err) {
        if (err) {
            resp.render('resposta_usuario', {resposta: "Erro ao cadastrar usuário!"})
        }else {
            // Após cadastro bem-sucedido, redireciona para login
            resp.redirect('/login_usuario.html?message=Cadastro realizado com sucesso! Faça login.');
        };
    });
});

app.post("/logar_usuario", function(req, resp) {
    if (!usuarios) {
        return resp.render('resposta_usuario', {resposta: "Banco de dados não conectado!"});
    }
    
    var data = {db_login: req.body.login, db_senha: req.body.senha };

    usuarios.find(data).toArray(function(err, items) {
        console.log(items);
        if (items.length == 0) {
            resp.render('resposta_usuario', {resposta: "Usuário/senha não encontrado! <a href='/cadastro_usuario.html'>Cadastre-se</a>"})
        }else if (err) {
            resp.render('resposta_usuario', {resposta: "Erro ao logar usuário!"})
        }else {
            // Login bem-sucedido - redireciona para lista de carros
            resp.redirect('/carros?usuario=' + encodeURIComponent(items[0].db_nome));
        };
    });
});

////////////////////////////////////////////// 
// GERÊNCIA DE CARROS (APÓS LOGIN)
////////////////////////////////////////////// 

// Página de listagem de carros (READ) 
app.get('/carros', function(req, resp) {
    // Verifica se veio do login
    if (!req.query.usuario) {
        return resp.redirect('/login_usuario.html?message=Faça login primeiro!');
    }
    
    if (!carros) {
        return resp.render('lista_carros', {carros: [], erro: "Banco de dados não conectado!", usuario: req.query.usuario});
    }
    
    carros.find({}).toArray(function(err, items) {
        if (err) {
            console.log("Erro ao buscar carros:".red, err);
            resp.render('lista_carros', {carros: [], erro: "Erro ao carregar carros!", usuario: req.query.usuario});
        } else {
            resp.render('lista_carros', {carros: items, erro: null, usuario: req.query.usuario});
        }
    });
});

// Página de gerenciamento de carros
app.get('/gerencia_carros', function(req, resp) {
    // Verifica se veio do login
    if (!req.query.usuario) {
        return resp.redirect('/login_usuario.html?message=Faça login primeiro!');
    }
    
    if (!carros) {
        return resp.render('gerencia_carros', {carros: [], erro: "Banco de dados não conectado!", usuario: req.query.usuario});
    }
    
    carros.find({}).toArray(function(err, items) {
        if (err) {
            console.log("Erro ao buscar carros:".red, err);
            resp.render('gerencia_carros', {carros: [], erro: "Erro ao carregar carros!", usuario: req.query.usuario});
        } else {
            resp.render('gerencia_carros', {carros: items, erro: null, usuario: req.query.usuario});
        }
    });
});

// Operações CRUD para carros
app.post("/cadastrar_carro", function(req, resp) {
    if (!carros) {
        return resp.render('resposta_carro', {resposta: "Banco de dados não conectado!"});
    }
    
    var data = { 
        marca: req.body.marca, 
        modelo: req.body.modelo, 
        ano: parseInt(req.body.ano),
        qtde_disponivel: parseInt(req.body.qtde_disponivel)
    };

    carros.insertOne(data, function (err) {
        if (err) {
            resp.render('resposta_carro', {resposta: "Erro ao cadastrar carro!"})
        }else {
            resp.render('resposta_carro', {resposta: "Carro cadastrado com sucesso!"})        
        };
    });
});

app.post("/remover_carro", function(req, resp) {
    if (!carros) {
        return resp.render('resposta_carro', {resposta: "Banco de dados não conectado!"});
    }
    
    var data = { 
        marca: req.body.marca, 
        modelo: req.body.modelo 
    };
    
    carros.deleteOne(data, function (err, result) {
        console.log(result);
        if (result.deletedCount == 0) {
            resp.render('resposta_carro', {resposta: "Carro não encontrado!"})
        }else if (err) {
            resp.render('resposta_carro', {resposta: "Erro ao remover carro!"})
        }else {
            resp.render('resposta_carro', {resposta: "Carro removido com sucesso!"})        
        };
    });
});

app.post("/atualizar_carro", function(req, resp) {
    if (!carros) {
        return resp.render('resposta_carro', {resposta: "Banco de dados não conectado!"});
    }
    
    var filter = { 
        marca: req.body.marca, 
        modelo: req.body.modelo 
    };
    
    var updateData = { 
        $set: {
            ano: parseInt(req.body.ano),
            qtde_disponivel: parseInt(req.body.qtde_disponivel)
        }
    };

    carros.updateOne(filter, updateData, function (err, result) {
        console.log(result);
        if (result.modifiedCount == 0) {
            resp.render('resposta_carro', {resposta: "Carro não encontrado!"})
        }else if (err) {
            resp.render('resposta_carro', {resposta: "Erro ao atualizar carro!"})
        }else {
            resp.render('resposta_carro', {resposta: "Carro atualizado com sucesso!"})        
        };
    });
});

app.post("/vender_carro", function(req, resp) {
    if (!carros) {
        return resp.render('resposta_carro', {resposta: "Banco de dados não conectado!"});
    }
    
    var filter = { 
        marca: req.body.marca, 
        modelo: req.body.modelo 
    };
    
    var updateData = { 
        $inc: { qtde_disponivel: -1 }
    };

    carros.updateOne(filter, updateData, function (err, result) {
        console.log(result);
        if (result.modifiedCount == 0) {
            resp.render('resposta_carro', {resposta: "Carro não encontrado ou já esgotado!"})
        }else if (err) {
            resp.render('resposta_carro', {resposta: "Erro ao vender carro!"})
        }else {
            // Verificar se a quantidade chegou a zero após a venda
            carros.findOne(filter, function(err, carro) {
                if (carro && carro.qtde_disponivel === 0) {
                    resp.render('resposta_carro', {resposta: "Carro vendido com sucesso! AVISO: Este carro está ESGOTADO!"})
                } else {
                    resp.render('resposta_carro', {resposta: "Carro vendido com sucesso!"})
                }
            });
        };
    });
});