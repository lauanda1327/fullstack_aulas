// Exercicio 2 e 3

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


function criarArco(contexto, raio, espessura, corDeBorda, posicaoX, posicaoY, anguloInicial, anguloFinal) {
    contexto.beginPath()
    contexto.lineWidth = espessura;
    contexto.strokeStyle = corDeBorda
    contexto.arc(posicaoX, posicaoY, raio, (anguloInicial * Math.PI) / 180, (anguloFinal * Math.PI) / 180);
    contexto.stroke();
    contexto.closePath()
}
function preencherArco(contexto, raio, espessura, corDeBorda, corDeFundo, posicaoX, posicaoY, anguloInicial, anguloFinal) {
    contexto.beginPath()
    contexto.lineWidth = espessura;
    contexto.strokeStyle = corDeBorda
    contexto.fillStyle = corDeFundo
    contexto.arc(posicaoX, posicaoY, raio, (anguloInicial * Math.PI) / 180, (anguloFinal * Math.PI) / 180);
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



canvas1 = document.getElementById("canvas1");
ctx1 = canvas1.getContext("2d");
canvas2 = document.getElementById("canvas2");
ctx2 = canvas2.getContext("2d");


criarRetangulo(ctx1, "white", 300, 300, 0, 0);
criarRetangulo(ctx1, "blue", 50, 50, 0, 0);
criarRetangulo(ctx1, "red", 50, 50, 250, 0)
criarRetangulo(ctx1, "yellow", 30, 60, 0, 270)
criarRetangulo(ctx1, "yellow", 30, 30, 0, 240)

criarRetangulo(ctx1, "black", 30, 60, 240, 270)
criarRetangulo(ctx1, "black", 30, 30, 270, 240)


criarRetangulo(ctx1, "cyan", 30, 30, 0, 150)
criarRetangulo(ctx1, "cyan", 30, 30, 0, 120)
criarRetangulo(ctx1, "cyan", 15, 30, 270, 150)
criarRetangulo(ctx1, "cyan", 15, 30, 270, 135)

criarRetangulo(ctx1, "red", 40, 40, 110, 150)

criarLinha(ctx1, 1, "green",0,150,300,150)

criarLinha(ctx1, 1, "red",300,0,150,150)
criarLinha(ctx1, 1, "blue",0,0,150,150)

// Exercio dois casa e arvores
// cor de fundo
criarRetangulo(ctx2, "#8ffdd4", 300, 300, 0, 0)
// chão
criarRetangulo(ctx2, "#808080", 70, 300, 0, 230)
// sol
criarCirculo(ctx2, 40, 0, '#fcff2d', '#fcff2d',230, 70)
// casa
criarRetangulo(ctx2, "#86471a", 80, 75, 110, 150)
// janelas
criarRetangulo(ctx2, "#47bdfd", 22, 22, 156, 168)
criarRetangulo(ctx2, "#47bdfd", 22, 22, 117, 168)
// porta
criarRetangulo(ctx2, "#624423", 40, 14, 140, 190)
// teto
criarTriangulo(ctx2, "#f5694d",110, 150,184, 150,146,110)
// arvores
criarRetangulo(ctx2, "#86471a", 50, 18, 260, 220)
criarRetangulo(ctx2, "#86471a", 50, 18, 45, 180)
// copa das arvores
criarCirculo(ctx2, 25, 0, "#318a26", "#318a26", 269, 212)
criarCirculo(ctx2, 25, 0, "#318a26", "#318a26", 55, 172)
// rio
criarRetangulo(ctx2, '#458efc',100,45,0,230)
criarArco(ctx2, 44, 2, '458efc', 0, 230, -90, -0)
