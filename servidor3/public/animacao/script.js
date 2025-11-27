let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")




let imagem2 = { // cria o objeto imagem
    lw: 2,
    cor_preenchimento: "lightblue",
    cor_linha: "black",
    x: 50,
    y: 200,
    largura: 100,
    altura: 50,
    desenhar: function(){
        ctx.beginPath()
        ctx.lineWidth = this.lw
        ctx.fillStyle = this.cor_preenchimento
        ctx.strokeStyle = this.cor_linha
        ctx.fillRect(this.x, this.y, this.largura, this.altura)
        ctx.strokeRect(this.x, this.y, this.largura, this.altura)
        ctx.closePath()
    },  
};


// exemplo com imagem
let imagem = {
    x: 200,
    y: 250,
    largura: 10,
    altura: 10,
    img: new Image(),
    desenhar: function(){
        this.img.src = 'personagem.png';
        ctx.beginPath();
        // drawImage(image, dx, dy, dWidth, dHeight)
        ctx.drawImage(this.img, this.x, this.y, 150, 150)
        ctx.closePath()
    }
}

function animacao(){
    ctx.clearRect(0,0,400,400);
    let buffer = 140
    if(imagem.x >= 300 - imagem.largura - buffer){
        console.log("direita")
        imagem.x = 300 - imagem.largura - buffer
    }
    if(imagem.x <= 0){
        console.log("esquerda")
        imagem.x = 0 
    }
    if(imagem.y <= 0){
        console.log("em cima")
        imagem.y = 0
    }
    if(imagem.y >= 300 - imagem.altura - buffer){
        console.log("em baixo")
        imagem.y = 300 - imagem.altura - buffer
    }
    
    // imagem.x += aux
    // imagem.cor_preenchimento = "white"
    // imagem.desenhar();
    // imagem_2.desenhar();
    imagem.desenhar();
    


    requestAnimationFrame(animacao);
}

animacao();

document.addEventListener("mousemove", function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left - 78;
    let y_mouse = evento.clientY - rect.top - 78;
    //console.log(x_mouse, y_mouse)

    imagem.x = x_mouse
    imagem.y = y_mouse
});

