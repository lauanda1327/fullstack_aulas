let idades = [18,20] // cria vetor de idades
console.log("vetor/array de idades:")
console.log(idades)

idades.push(24) // nova idade adicionada na última posição
console.log("Novo vetor/array de idades:")
console.log(idades)

idades.pop()
console.log("Novo vetor/array com o último elemento removido:")
console.log(idades)

delete idades


let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")


//  basico de orientação a objetos
// criar objeto 1
var pessoa = {
    idade: 5,
    altura: 1.0,
    imprimirIdade: function(){
        console.log(this.idade)
    }
};

pessoa.imprimirIdade()

// criar objeto 2
let carro_1 = {
    posicao: 0,
    cor: 'azul',
    modelo: 'civic',
    buzinar: function(){
        console.log("biip biip")
    },
    andar: function(vel){
        this.posicao +=  vel
    }
};

console.log(carro_1.modelo + " " + carro_1.cor)
carro_1.buzinar()
console.log("posição atual: " + carro_1.posicao)
carro_1.andar(1)
console.log("posição atual: " + carro_1.posicao)
carro_1.andar(2)
console.log("posição atual: " + carro_1.posicao)
carro_1.andar(1)
console.log("posição atual: " + carro_1.posicao)

let carro_2 = {
    posicao: 0,
    cor: 'amarelo',
    modelo: 'fusca',
    buzinar: function(){
        console.log("fom fom")
    },
    andar: function(vel){
        this.posicao +=  vel
    }
};

console.log(carro_2.modelo + " " + carro_2.cor)
carro_2.buzinar()
console.log("posição atual: "+ carro_2.posicao)
carro_2.andar(1)
console.log("posição atual: " + carro_2.posicao)
carro_2.andar(1)
console.log("posição atual: " + carro_2.posicao)
carro_2.andar(1)
console.log("posição atual: " + carro_2.posicao)


let carros = [carro_1,carro_2]
for(let i = 0; i < carros.length; i++){
    let carro = carros[i]
    console.log(carro.modelo + " " + carro.cor)
    carro.buzinar()
}

let retangulo = { // cria o objeto retangulo
    lw: 2,
    cor_preenchimento: "yellow",
    cor_linha: "black",
    x: 10,
    y: 10,
    largura: 50,
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
/*
let canvas = document.getElementById("canvas")
let ctx = canvas.getContext("2d")
*/
// criando o retângulo
// retangulo.x = 140
// retangulo.cor_preenchimento = "white"
// passa a janela pois eu  a criei depois, é uma variavel global que o objeto não tem acesso
// retangulo.desenhar(ctx)

let retangulo_2 = { // cria o objeto retangulo
    lw: 2,
    cor_preenchimento: "yellow",
    cor_linha: "black",
    x: 10,
    y: 10,
    largura: 50,
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

// retangulo_2.x = 270
// retangulo_2.y= 280
// retangulo_2.cor_preenchimento = "yellow"
// retangulo_2.desenhar() //sem passar a janela 

let retangulo_3 = { // cria o objeto retangulo
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
    img: new Image(),
    desenhar: function(){
        this.img.src = 'personagem.png';
        ctx.beginPath();
        // drawImage(image, dx, dy, dWidth, dHeight)
        ctx.drawImage(this.img, this.x, this.y, 150, 150)
        ctx.closePath()
    }
}


/*
Animações -> Repinturas
animações consistem basicamente em mudar os frames, apagando, inserindo, apagando, inserindo
setInterval(funcao, tempo)
setTimeOut(funcao, tempo)
requestAnimationFrame(funcao)
*/
let aux = 1

function animacao(){
    ctx.clearRect(0,0,400,400);

    if(retangulo.x == 350){
        aux = -1
    }
    else if(retangulo.x == 0){
        aux = 1
    }
    retangulo.x += aux
    retangulo.cor_preenchimento = "white"
    retangulo.desenhar();
    retangulo_2.desenhar();
    retangulo_3.desenhar();
    imagem.desenhar()


    requestAnimationFrame(animacao);
}

animacao();

document.addEventListener("keydown", function(evento){
    let tecla = evento.key
    let vel = 5
    console.log(tecla)
    if(tecla == "ArrowUp"){
        retangulo_2.y -=vel
    }
    else if(tecla == "ArrowDown"){
        retangulo_2.y += vel
    }
    else if(tecla == "ArrowLeft"){
        retangulo_2.x -= vel
    }
    else if(tecla == "ArrowRight"){
        retangulo_2.x += vel
    }
});

document.addEventListener("mousemove", function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left - 20;
    let y_mouse = evento.clientY - rect.top -  20;
    console.log(x_mouse, y_mouse)

    retangulo_3.x = x_mouse
    retangulo_3.y = y_mouse
});

