
let numero = Math.random()
numero = numero * 100
numero= Math.floor(numero) 
console.log(numero)
numeros_pequenos = ''
numeros_grandes = ''

function validarNumero(){
    let numero_usuario = parseInt(document.getElementById('numero').value)
    console.log(numero_usuario)
    if(numero_usuario == numero){
        document.getElementById("mensagem").innerHTML = "Número Igual"
        document.getElementById("mensagem").style.setProperty("background-color", "#00eb00")
    }
    if(numero_usuario < numero){
        numeros_pequenos = numero_usuario  + ' - ' + numeros_pequenos
        document.getElementById('resp_tentativas_pequenas').innerHTML = numeros_pequenos
        document.getElementById("mensagem").innerHTML = "Número Muito Pequeno"
        document.getElementById("mensagem").style.setProperty("background-color", "#ff2424")
    }
    if(numero_usuario > numero){
        numeros_grandes = numero_usuario  + ' - ' + numeros_grandes
        document.getElementById('resp_tentativas_grandes').innerHTML = numeros_grandes
        document.getElementById("mensagem").innerHTML = "Número Muito Grande"
        document.getElementById("mensagem").style.setProperty("background-color", "#ff2424")
    }
}