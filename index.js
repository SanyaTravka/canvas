const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

//ctx.fillStyle = 'black';
//ctx.fillRect(10, 10, 150, 100);

function stickMan(x, y, isChild) {
    if (isChild === false) {
        ctx.beginPath();
        ctx.moveTo(x - 25, y - 90);
        ctx.lineTo(x - 25, y - 50);
        ctx.lineTo(x, y);
        ctx.moveTo(x - 25, y - 50);
        ctx.lineTo(x - 50, y);
        ctx.moveTo(x - 25, y - 80);
        ctx.lineTo(x, y - 60);
        ctx.moveTo(x - 25, y - 80);
        ctx.lineTo(x - 50, y - 60);
        ctx.stroke();
    } else {
        ctx.beginPath();
        ctx.moveTo(x - 25, y - 45);
        ctx.lineTo(x - 25, y - 25);
        ctx.lineTo(x, y);
        ctx.moveTo(x - 25, y - 25);
        ctx.lineTo(x - 50, y);
        ctx.moveTo(x - 25, y - 40);
        ctx.lineTo(x, y - 30);
        ctx.moveTo(x - 25, y - 40);
        ctx.lineTo(x - 50, y - 30);
        ctx.stroke();
    }
}
stickMan(200, 100, true);