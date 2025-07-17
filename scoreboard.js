const scoreboard = {
    color: "black",
    colorText: "white",
    width: 320,
    height: 50,
    name: "IFRJ Bird",
    score: 0,
    draw() {
        eCtx.fillStyle = this.color;
        eCtx.fillRect(0, 0, this.width, this.height);

        eCtx.fillStyle = this.colorText;
        eCtx.font = "20px Fantasy";
        eCtx.textBaseline = "middle";
        eCtx.textAlign = "center";

        // nome do jogo no canto esquerdo
        eCtx.fillText(this.name, 80, 25);

        // pontuação no canto direito
        eCtx.fillText("Score: " + this.score, 240, 25);
    }
};

// Função para simular o jogador ganhando pontos
function playerScored() {
    scoreboard.score++;
}

// Loop principal do jogo
function gameLoop() {
    // Limpa todo o canvas
    eCtx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha a barra do placar
    scoreboard.draw();

    // Simula pontuação automática a cada 60 frames (~1s se 60fps)
    if (frameCount % 60 === 0) {
        playerScored();
    }

    frameCount++;
    requestAnimationFrame(gameLoop);
}

let frameCount = 0;
gameLoop();
