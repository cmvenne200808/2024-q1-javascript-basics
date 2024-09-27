// @ts-check


export class CircleShape {
    constructor(x, y, ctx, canvas) {
        this.x = x;
        this.y = y;
        this.ctx = ctx;
        this.canvas = canvas;

        this.radius = Math.PI * 2;
        
        this.hue = 0;

        this.speedMult = 11;
        this.speedX = Math.floor(Math.random() * this.speedMult) + 1;
        this.speedY = Math.floor(Math.random() * this.speedMult) + 1;
        this.dirX = 1;
        this.dirY = 1;
    }

    update() {
        this.x += this.speedX * this.dirX;
        this.y += this.speedY * this.dirY;
        this.hue++;

        if(this.hue > 360) {
            this.hue = 0;
        }

        if(this.x < 0) {
            this.dirX = 1;
        } else if (this.x + this.radius > this.canvas.width) {
            this.dirX = -1;
        }

        if(this.y < 0) {
            this.dirY = 1;
        } else if (this.y + this.radius > this.canvas.height) {
            this.dirY = -1;
        }
    }
}