let bird;
let pipe;
let animationId;

function play() {
    scoreboard.draw();
    sky.draw();
    ground.draw();
    bird.draw();
    pipe.draw();

    if (bird.life > 0) {
        animationId = requestAnimationFrame(play);
    }

    if (bird.y > (scoreboard.height + sky.height - bird.size)) {
        bird.die();
    }

    if (Math.abs(bird.x - pipe.x) < bird.size) {
        if ((bird.y < pipe.y + 50) || (bird.y > pipe.y + 110)) {
            bird.hit();
            console.log('Bird X:' + bird.x + ' Bird Y:' + bird.y);
            console.log('Pipe X:' + pipe.x + ' Pipe Y:' + pipe.y);
        }
    }
}

function startGame() {
    bird = new Bird();
    pipe = new Pipe(294, 50 + 200, 400);
    animationId = requestAnimationFrame(play);
}

function resetGame() {
    cancelAnimationFrame(animationId);
    startGame();
}

document.addEventListener('click', () => {
    if (bird.life > 0) bird.flap();
});

startGame();
