const botao = document.querySelector('button');

const canvas = document.querySelector('canvas');
const contexto = canvas.getContext('2d');

const desenharRetangulo = (cor) => {
    contexto.fillStyle = cor;
    contexto.fillRect(0, 0, 600, 400);
};

const desenharLosango = (cor) => {
    contexto.beginPath();
    contexto.fillStyle = cor;
    contexto.moveTo(300, 50);
    contexto.lineTo(550, 200);
    contexto.lineTo(300, 350);
    contexto.lineTo(50, 200);
    contexto.lineTo(300, 50);
    contexto.fill();
};

const desenharCirculo = (cor) => {
    contexto.beginPath();
    contexto.fillStyle = cor;
    contexto.arc(300, 200, 100, 0, 2 * Math.PI);
    contexto.fill();
};

botao.addEventListener('click', () => {
    if (botao.innerText == 'Desenhar') {
        desenharRetangulo('green');
        desenharLosango('yellow');
        desenharCirculo('blue');
        botao.innerText = 'Apagar';
    } else {
        desenharRetangulo('grey');
        botao.innerText = 'Desenhar';
    }
});