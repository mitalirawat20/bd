const canvas = document.getElementById("confetti");
const ctx = canvas.getContext("2d");

// Resize canvas to full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Generate confetti
let confetti = [];

function createConfetti() {
    for (let i = 0; i < 300; i++) {
        confetti.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            r: Math.random() * 6 + 2,
            dx: Math.random() * 2 - 1,
            dy: Math.random() * 3 + 1,
            color: `hsl(${Math.random() * 360}, 100%, 50%)`,
        });
    }
}

function drawConfetti() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    confetti.forEach((particle) => {
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.r, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        particle.x += particle.dx;
        particle.y += particle.dy;

        if (particle.y > canvas.height) particle.y = 0;
    });
    requestAnimationFrame(drawConfetti);
}

function triggerConfetti() {
    createConfetti();
    drawConfetti();
}
function triggerSurprise() {
    const flyingCat = document.getElementById('flying-cat');
    flyingCat.classList.add('visible');

    // Hide the image after the animation completes
    setTimeout(() => {
        flyingCat.classList.remove('visible');
    }, 3000); // 3 seconds
}
// Trigger the surprise overlay and confetti
function triggerSurprise() {
    const overlay = document.getElementById('overlay');
    overlay.classList.add('active'); // Show the overlay

    // Trigger confetti
    startConfetti();

    // Hide the overlay after 5 seconds
    setTimeout(() => {
        overlay.classList.remove('active');
        stopConfetti();
    }, 5000);
}

// Confetti Functions (add this from the previous confetti code)
let confettiCanvas;
function startConfetti() {
    confettiCanvas = document.getElementById('confetti');
    const confetti = new ConfettiGenerator({ target: confettiCanvas });
    confetti.render();
}

function stopConfetti() {
    confettiCanvas.getContext('2d').clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
}
