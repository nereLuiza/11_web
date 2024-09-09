console.log('Olá mundo!');

// Criando um novo elemento 
let novoElemento = document.createElement('h1');
// Alterando o conteúdo de texto do elemento
novoElemento.innerText = 'Hello, World! English! (Inglês) Ok?!';
// Selecionando o elemento body
let elementoBody = document.body;
// Colocando o novo elemento no body
elementoBody.appendChild(novoElemento);

novoElemento.style.backgroundColor = 'blue';
novoElemento.style.color = 'yellow';

//eu escolhi um unicórnio, o chat tentou pelo menos...

const canvas = document.getElementById('unicornCanvas');
const ctx = canvas.getContext('2d');

function drawUnicorn() {
    // Corpo do Unicórnio
    ctx.fillStyle = '#ffffff';
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.ellipse(200, 250, 80, 50, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    // Cabeça do Unicórnio
    ctx.beginPath();
    ctx.ellipse(160, 180, 40, 30, 0, 0, 2 * Math.PI);
    ctx.fill();
    ctx.stroke();

    // Olho do Unicórnio
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(170, 175, 5, 0, 2 * Math.PI);
    ctx.fill();

    // Narina do Unicórnio
    ctx.beginPath();
    ctx.arc(150, 185, 3, 0, 2 * Math.PI);
    ctx.fill();

    // Chifre do Unicórnio
    ctx.fillStyle = '#ffd700';
    ctx.beginPath();
    ctx.moveTo(140, 140);
    ctx.lineTo(155, 110);
    ctx.lineTo(170, 140);
    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    // Cauda do Unicórnio
    ctx.strokeStyle = '#ff69b4';
    ctx.lineWidth = 4;
    ctx.beginPath();
    ctx.moveTo(280, 250);
    ctx.quadraticCurveTo(350, 200, 300, 300);
    ctx.stroke();

    // Pernas do Unicórnio
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2;
    ctx.beginPath();
    ctx.moveTo(170, 290);
    ctx.lineTo(170, 350);
    ctx.stroke();

    ctx.beginPath();
    ctx.moveTo(230, 290);
    ctx.lineTo(230, 350);
    ctx.stroke();
}

drawUnicorn();
