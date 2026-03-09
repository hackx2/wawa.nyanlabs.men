function random() { // i'm lowkey lazy
    return Math.random();
}

class Meow {
    constructor() {
        this.reset();
        this.y = random() * canvas.height;
    }

    reset() {
        this.x = random() * canvas.width; this.y = -55; // or smth
        this.speedY = random() * 2 + 1; this.speedX = (random() - 0.5) * 1.5;
        this.size = random() * 35 + 20; this.rot = random() * 360; this.mult = (random() - 0.5) * 4;
    }
    
    update() {
        this.y += this.speedY; this.x += this.speedX;
        this.rot += this.mult; 
        if (this.y > canvas.height + 50) this.reset();
    }
    draw() {
        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.rotate((this.rot * Math.PI) / 180);
        ctx.globalAlpha = 0.7;
        ctx.drawImage(img, -this.size / 2, -this.size / 2, this.size, this.size);
        ctx.restore();
    }
}

const canvas = document.getElementById("dumbKitys");
const ctx = canvas.getContext("2d");

function _resize() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}
window.addEventListener("resize", _resize); _resize();

const img = new Image(); img.src = "https://raw.githubusercontent.com/hackx2/wawa.nyanlabs.men/refs/heads/main/index.png";
const dumbasses = Array.from({ length: 30 }, () => new Meow()); // woa

img.onload = () => {
    (function d() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        dumbasses.forEach((p) => {
            p.update();
            p.draw();
        });
        requestAnimationFrame(d);
    })();
};