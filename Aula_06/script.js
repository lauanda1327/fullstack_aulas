let titulo = document.getElementById('titulo').innerHTML
console.log(titulo)

document.getElementById('titulo').innerHTML = 'Lauanda Nobre'

// Exercicio 1
/*
let nome = window.prompt('Qual é o seu nome?')
let idade = window.prompt('Qual é a sua idade?')
let ano_atual = window.prompt('Qual é o ano atual')

let nasc = ano_atual - idade
let resposta = 'Olá ' + nome + ' você nasceu em ' + nasc

document.getElementById('resposta_e1').innerHTML = resposta
*/

// Funções em javascript
// Função sem parâmetro
function exibirMensagem1(){
    console.log('oi')
}
// Função com parâmetro
function exibirMensagem2(mensagem) {
    console.log(mensagem)
}
// Chamada de funções
exibirMensagem1()
exibirMensagem2('Olá mundo 1')
exibirMensagem2('Olá mundo 2')

function soma(a, b){
    let c = a + b
    console.log('A soma de ' + a + ' + ' + b + ' é igual  a ' + c)
}

soma(1,1)
soma(7,9)
soma(30,80)

// Função sem retorno
function function_sem_retorno(){
    console.log('oi, tudo bem?')
}
// Função com retorno
function functionComRetorno(){
    return 8
}
function_sem_retorno()
let r = functionComRetorno()

// Trabalhando com inputs e eventos
function imprimirTexto() {
    let texto = document.getElementById('in_text').value
    console.log(texto)
}

// Exercicio 2
function imprimirIncrementos() {
    let x = parseInt(document.getElementById('in_num').value)
    document.getElementById('resposta_e2').innerHTML = ""
    for(let i = 0; i < x; i++){
        console.log(i)
        let resposta = document.getElementById('resposta_e2').innerHTML + " " + i
        document.getElementById('resposta_e2').innerHTML = resposta;
    }
}

// Exercício 3
function imprimirSoma() {
    let a = parseInt(document.getElementById('in_1_ex3').value)
    let b = parseInt(document.getElementById('in_2_ex3').value)

    let c = a + b
    document.getElementById('resposta_e3').innerHTML = c
}

// Exercicio 4

function soma(a, b){
    return a + b
}

function mult(a, b){
    return a * b
}

function imprimirCalculo() {
    let a = parseInt(document.getElementById('in_1_ex4').value)
    let b = parseInt(document.getElementById('in_2_ex4').value)

    let c = 0
    if(a < 0 || b < 0){
        c = soma(a,b)
    } else{
        c = mult(a,b)
    }
    document.getElementById('resposta_e4').innerHTML = c
}