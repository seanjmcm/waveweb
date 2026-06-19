const canvas = document.createElement('canvas');
canvas.id = 'particleCanvas';
document.body.appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.style.position = 'fixed';
canvas.style.top = '0';
canvas.style.left = '0';
canvas.style.width = '100vw';
canvas.style.height = '100vh';
canvas.style.pointerEvents = 'none';
canvas.style.zIndex = '9998'; 

let particlesArray = [];

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const mouse = {
    x: undefined,
    y: undefined,
}

window.addEventListener('mousemove', function(event){
    createParticles(event.x, event.y);
});

window.addEventListener('touchmove', function(event){
    if (event.touches.length > 0) {
        createParticles(event.touches[0].clientX, event.touches[0].clientY);
    }
});

class Particle {
    constructor(){
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = (Math.random() * 6 + 2) * 0.8;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        // Premium cyan/blue colors
        this.color = 'hsla(' + (190 + Math.random() * 30) + ', 100%, 60%, ' + (Math.random() * 0.8 + 0.2) + ')'; 
    }
    update(){
        this.x += this.speedX;
        this.y += this.speedY;
        if(this.size > 0.1) this.size -= 0.125;
    }
    draw(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
    }
}

function createParticles(x, y) {
    mouse.x = x;
    mouse.y = y;
    for (let i = 0; i < 2; i++) {
        particlesArray.push(new Particle());
    }
}

function handleParticles(){
    for (let i = 0; i < particlesArray.length; i++){
        particlesArray[i].update();
        particlesArray[i].draw();
        
        if (particlesArray[i].size <= 0.2){
            particlesArray.splice(i, 1);
            i--;
        }
    }
}

function animate(){
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    handleParticles();
    requestAnimationFrame(animate);
}

animate();
