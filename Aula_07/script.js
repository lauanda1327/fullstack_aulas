let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d"); // "2d" deve ser minúsculo

// Criando retângulos
ctx.beginPath(); // Inicia um novo espaço para desenhar
ctx.lineWidth = 3; // Largura da linha
ctx.fillStyle = 'blue'; // Cor de preenchimento
ctx.strokeStyle = 'black'; // Cor da borda
ctx.fillRect(10,10,50,50); // (x,y,largura,altura), pinta o retângulo
ctx.strokeRect(10,10,50,50); // (x,y,largura,altura), desenha a borda do retângulo
ctx.closePath(); // Finaliza o espaço para desenhar

// linhas
ctx.beginPath();
ctx.lineWidth = 3;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'black';
ctx.moveTo(200,150);
ctx.lineTo(60,10);
ctx.lineTo(60,250);
ctx.lineTo(200,250);
ctx.lineTo(200,150);
ctx.fill();
ctx.stroke();
ctx.closePath();

// arcos
ctx.beginPath();
ctx.lineWidth = 3;
ctx.fillStyle = 'blue';
ctx.strokeStyle = 'black';
ctx.arc(200,200,50,1.5*Math.PI,2.5*Math.PI);
ctx.fill();
ctx.stroke();
ctx.closePath();

// textos
ctx.beginPath();
ctx.lineWidth = 2;
ctx.fillStyle = 'blue'; 
ctx.strokeStyle = 'black';
ctx.font = "24px Arial"; // tamanho e fonte
ctx.textAlign = "center"; // left, right, center
ctx.fillText("Olá",200,350); // (texto,x,y), pinta o texto
ctx.strokeText("Olá",200,350); // (texto,x,y), desenha a borda do texto
ctx.closePath();


// Execicio 1
let canvas2 = document.getElementById("canvas2");
let ctx2 = canvas2.getContext("2d");

// Linha verde
ctx2.beginPath();
ctx2.strokeStyle = 'green';
ctx2.lineWidth = 3;
ctx2.moveTo(600,300);
ctx2.lineTo(0,300);
ctx2.stroke();
ctx2.closePath();

// Quadrados
ctx2.beginPath()
ctx2.fillStyle = "red"
ctx2.fillRect(0,0,50,50);
ctx2.fillStyle = "blue"
ctx2.fillRect(550,0,50,50);
ctx2.fillStyle = "yellow"
ctx2.fillRect(0,550,50,50);
ctx2.fillStyle = "green"
ctx2.fillRect(550,550,50,50);
ctx2.closePath();

// Linha vermelha
ctx2.beginPath()
ctx2.lineWidth = 3;
ctx2.strokeStyle = 'red';
ctx2.moveTo(600,600); // o move to recebe como argumentos as coordenadas x e y, ele move o ponto inicial da linha
ctx2.lineTo(0,0); // o line to recebe como argumentos as coordenadas x e y, ele desenha a linha até o ponto final
ctx2.stroke();
ctx2.closePath();

// Linha azul
ctx2.beginPath();
ctx2.strokeStyle = 'blue';
ctx2.lineWidth = 3;
ctx2.moveTo(0,600);
ctx2.lineTo(600,0);
ctx2.stroke();
ctx2.closePath();

// arco
ctx2.beginPath();
ctx2.lineWidth = 3;
ctx2.strokeStyle = 'green';
ctx2.arc(300,300,100,0,1*Math.PI); // x, y, raio, angulo inicial, angulo final
ctx2.stroke();
ctx2.closePath();

// arco 2
ctx2.beginPath();
ctx2.lineWidth = 7;
ctx2.strokeStyle = 'green';
ctx2.fillStyle = 'yellow';
ctx2.arc(100,200,25,0,2*Math.PI); // x, y, raio, angulo inicial, angulo final
ctx2.stroke();
ctx2.fill();
ctx2.closePath();

// arco 3
ctx2.beginPath();
ctx2.lineWidth = 7;
ctx2.strokeStyle = 'green';
ctx2.fillStyle = 'yellow';
ctx2.arc(500,200,25,0,2*Math.PI); // x, y, raio, angulo inicial, angulo final
ctx2.stroke();
ctx2.fill();
ctx2.closePath();

// texto
ctx2.beginPath();
ctx2.lineWidth = 2;
ctx2.fillStyle = 'black';
ctx2.font = "40px Arial"
ctx2.textAlign = "center";
ctx2.fillText("Desenvolvimento Web",300,100);
ctx2.closePath();