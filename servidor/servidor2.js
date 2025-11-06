// Importação dos módulos necessários para o servidor
var http = require('http');         // Módulo para criar servidor HTTP
var express = require('express');   // Framework web Express
var bodyParser = require('body-parser'); // Middleware para processar dados do corpo das requisições
var colors = require('colors');     // Módulo para colorir textos no console


// Inicializa uma nova aplicação Express
var app = express();


app.use(express.static('./public')); 
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(bodyParser.json()); 

// Configuração do template engine EJS
app.set('view engine', 'ejs'); 
app.set('views', './views');  

// Cria e inicia o servidor HTTP
var server = http.createServer(app); 
server.listen(80); 
console.log('Servidor rodando na porta 80...'.rainbow); 

app.get('/', function (req, res) {
  res.redirect('projects.html'); 
});

app.get('/projects', function (req, res) {
  res.redirect('projects.html'); 
});


app.get('/cadastra', function (req, res) {
  res.redirect('get_post/cadastro.html'); 
});


app.get('/login', function (req, res) {
  res.redirect('get_post/login.html'); 
});


app.post('/cadastro-usuario', function (req, res) {
  var nome = req.body.nome;   
  var email = req.body.email;
  var senha = req.body.senha; 

  res.render('resposta', {
    status: 'Usuário cadastrado com sucesso!',
    nome,
    email,
    senha
  });
});

app.post('/verifica-login', function (req, res) {
  var email = req.body.email; 
  var senha = req.body.senha;

  if (email === 'lauanda@gmail.com' && senha === '1234') {
    res.render('resposta', {
      status: 'Login realizado com sucesso!',
      nome: 'Usuário de teste',
      email,
      senha
    });
  } else {
    // Se login incorreto, renderiza resposta de erro
    res.render('resposta', {
      status: 'Falha no login: usuário ou senha incorretos.',
      nome: '',
      email,
      senha: ''
    });
  }
});