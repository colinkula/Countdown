const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Game constants
const GRAVITY = 0.25;
const FLAP = 4.6;
const PIPE_WIDTH = 50;
const PIPE_SPACING = 75;
const PIPE_GAP = 100;
const BIRD_WIDTH = 20;
const BIRD_HEIGHT = 20;
const FRAME_RATE = 60;
const FRAME_TIME = 1000 / FRAME_RATE;

// Game variables
let birdY = canvas.height / 2;
let birdVelocity = 0;
let pipes = [];
let frameCount = 0;
let gameRunning = true;
let score = 0;
let highScore = 0;
let lastTime = 0;

// Handle keypress to flap
document.addEventListener('keydown', () => {
    if (gameRunning) {
        birdVelocity = -FLAP;
    } else {
        resetGame();
    }
});

// Game loop
function gameLoop(currentTime) {
    if (!gameRunning) return;

    // Calculate the time elapsed since the last frame
    const deltaTime = currentTime - lastTime;

    if (deltaTime >= FRAME_TIME) {
        lastTime = currentTime;

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Update bird position
        birdVelocity += GRAVITY;
        birdY += birdVelocity;
        ctx.fillStyle = 'black';
        ctx.fillRect(50, birdY, BIRD_WIDTH, BIRD_HEIGHT);

        // Create pipes
        if (frameCount % PIPE_SPACING === 0) {
            const pipeY = Math.floor(Math.random() * (canvas.height - PIPE_GAP - 50)) + 25;
            pipes.push({ x: canvas.width, y: pipeY });
        }

        // Update and draw pipes
        pipes.forEach((pipe, index) => {
            pipe.x -= 4;
            ctx.fillStyle = 'green';
            ctx.fillRect(pipe.x, 0, PIPE_WIDTH, pipe.y);
            ctx.fillRect(pipe.x, pipe.y + PIPE_GAP, PIPE_WIDTH, canvas.height - pipe.y - PIPE_GAP);

            // Check for pipe passing
            if (pipe.x + PIPE_WIDTH === 50) {
                score++; // Increment score when bird passes the pipe
            }

            // Check for collision
            if (
                (50 + BIRD_WIDTH > pipe.x && 50 < pipe.x + PIPE_WIDTH && (birdY < pipe.y || birdY + BIRD_HEIGHT > pipe.y + PIPE_GAP)) ||
                birdY + BIRD_HEIGHT >= canvas.height || birdY <= 0
            ) {
                gameRunning = false;
            }

            // Remove pipes that are off screen
            if (pipe.x + PIPE_WIDTH < 0) {
                pipes.splice(index, 1);
            }
        });

        ctx.fillStyle = '#000';
        ctx.font = '24px Arial';
        ctx.fillText('Score: ' + score, 10, 30);
        ctx.fillText('High Score: ' + highScore, 150, 30);

        frameCount++;
    }
    
    requestAnimationFrame(gameLoop); // Pass currentTime here
}

// Reset game
function resetGame() {
    birdY = canvas.height / 2;
    birdVelocity = 0;
    pipes = [];
    frameCount = 0;
    gameRunning = true;

    if (score > highScore) {
        highScore = score;
    }
    score = 0;

    gameLoop();
}

lastTime = performance.now(); // Initialize lastTime with current time
gameLoop(lastTime); // Pass lastTime when calling gameLoop initially
