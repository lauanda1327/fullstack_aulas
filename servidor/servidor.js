require("colors");

var http = require("http");
var express = require("express")

var app = express();
app.use(express.static('./public'));
app.use(express.urlencoded({ extended: true }));
var server = http.createServer(app)
server.listen(80)

console.log("servidor rodando...".rainbow);

// aula 2 sobre servidores -> métodos GET e POST e templates

app.get('/', function(requisicao, resposta){
    resposta.redirect('index.html')
})

app.get('/oi', function(requisicao, resposta){
    resposta.redirect('oi.html')
})

app.get('/cadastrar', function(requisicao, resposta){
    console.log('requisicao recebida')
    
    let nome = requisicao.query.nome;
    let email = requisicao.query.email;
    let telefone = requisicao.query.telefone;
    let nascimento = requisicao.query.nascimento;
    console.log(nome,email,telefone,nascimento)

    resposta.render('resposta.ejs',{metodo:"GET",nome,email,telefone,nascimento})
})

app.post('/cadastrar', function(requisicao, resposta){
    console.log('requisicao recebida')
    
    let nome = requisicao.body.nome;
    let email = requisicao.body.email;
    let telefone = requisicao.body.telefone;
    let nascimento = requisicao.body.nascimento;

    console.log(nome,email,telefone,nascimento)

    resposta.render('resposta.ejs',{metodo:"POST",nome,email,telefone,nascimento})
})

app.get('/for', function(requisicao,resposta){
    let qtde = requisicao.query.qtde;
    console.log(qtde)
    resposta.render('for.ejs',{qtde})
})