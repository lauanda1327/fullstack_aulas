// Exercicio 2 e 3
canvas = document.getElementById("canvas");
ctx = canvas.getContext("2d");

function criarRetangulo(contexto, corDeFundo,altura, largura, posicaoX, posicaoY) {
    contexto.beginPath()
    contexto.fillStyle = corDeFundo
    contexto.fillRect(posicaoX, posicaoY, largura, altura)
    contexto.closePath()
}

function criarCirculo(contexto, raio, espessura, corDeFundo, corDeBorda, posicaoX, posicaoY) {
    contexto.beginPath()
    contexto.lineWidth = espessura;
    contexto.fillStyle = corDeFundo
    contexto.strokeStyle = corDeBorda
    contexto.arc(posicaoX, posicaoY, raio, 0, 2 * Math.PI);
    contexto.fill();
    contexto.stroke();
    contexto.closePath()
}

function criarArco(contexto, raio, espessura, corDeFundo, corDeBorda, posicaoX, posicaoY, anguloInicial, anguloFinal) {
    contexto.beginPath()
    contexto.lineWidth = espessura;
    contexto.fillStyle = corDeFundo
    contexto.strokeStyle = corDeBorda
    contexto.arc(posicaoX, posicaoY, raio, anguloInicial, anguloFinal);
    contexto.fill();
    contexto.stroke();
    contexto.closePath()
}

function criarLinha(contexto, espessura, corLinha, posicaoXInicial, posicaoYInicial, posicaoXFinal, posicaoYFinal) {
    contexto.beginPath()
    contexto.lineWidth = espessura
    contexto.strokeStyle = corLinha
    contexto.moveTo(posicaoXInicial, posicaoYInicial)
    contexto.lineTo(posicaoXFinal, posicaoYFinal)
    contexto.stroke()
    contexto.closePath()
}

function criarTriangulo(contexto, corDeFundo, posicaoX1, posicaoY1, posicaoX2, posicaoY2, posicaoX3, posicaoY3) {
    contexto.beginPath()
    contexto.fillStyle = corDeFundo
    contexto.moveTo(posicaoX1, posicaoY1)
    contexto.lineTo(posicaoX2, posicaoY2)
    contexto.lineTo(posicaoX3, posicaoY3)
    contexto.fill()
    contexto.closePath()
}

function EscreverNaTela(contexto, texto, espessura, corBorda, corLinha, posicaoX, posicaoY){
    contexto.beginPath()
    contexto.lineWidth = espessura
    contexto.fillStyle = corLinha
    contexto.strokeStyle = corBorda
    contexto.font = "30px Arial"
    contexto.textAlign = "center"
    contexto.strokeText(texto, posicaoX, posicaoY)
    contexto.fillText(texto, posicaoX, posicaoY)
    contexto.closePath()
}

criarRetangulo(ctx, "#9cfcd4", 300, 300, 0, 0)
criarCirculo(ctx,"#f9ff40", 15, 0, 0, 150, 150)

/* Exemplos de chamadas das funções
criarRetangulo(ctx, "yellow", 20, 20, 10, 10) // ctx, corDeFundo, altura, largura, posicaoX, posicaoY
criarCirculo(ctx, 10, 20, "red", "black", 20, 20) // contexto, raio, espessura, corDeFundo, corDeBorda, posicaoX, posicaoY
criarArco(ctx, 10, 10, "blue", "black", 20, 20, 0, Math.PI) // contexto, raio, espessura, corDeFundo, corDeBorda, posicaoX, posicaoY, anguloInicial, anguloFinal
criarLinha(ctx, 5, "green", 10, 10, 20, 20) // contexto, espessura, corLinha, posicaoXInicial, posicaoYInicial, posicaoXFinal, posicaoYFinal
EscreverNaTela(ctx, "Olá, Mundo!", 2, "black", "orange", 300, 300) // contexto, texto, espessura, corBorda, corLinha, posicaoX, posicaoY
criarTriangulo(ctx, "brown", 100, 100, 150, 50, 200, 100) // contexto, corDeFundo, posicaoX1, posicaoY1, posicaoX2, posicaoY2, posicaoX3, posicaoY3
*/
