function traceLine(x, y) {
    ctx.lineWidth = 10;
    ctx.lineCap = 'round';
    ctx.strokeStyle = 'blue';
    
    ctx.lineTo(x, y);
}

const canvas = document.querySelector("canvas");
let ctx = canvas.getContext('2d');

ctx.shadowOffsetX = 4;
ctx.shadowOffsetY = 4;
ctx.shadowBlur = 10;
ctx.shadowColor = "black";

ctx.beginPath();
ctx.moveTo(100, 150);

traceLine(200, 250);
traceLine(400, 250);
traceLine(500, 150);

ctx.stroke();
ctx.fillStyle = 'cyan';
ctx.fill();

ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.fillStyle = 'green';
ctx.rect(500, 300, 90, 90);
ctx.rect(450, 250, 90, 90);
ctx.lineWidth = 10;
ctx.stroke();
ctx.fill();

ctx.beginPath();
ctx.arc(50, 350, 40, 1.5*Math.PI, Math.PI);
ctx.strokeStyle = 'purple';
ctx.lineWidth = 5;
ctx.stroke();

const msg = "20°C";
ctx.font = '48px sans-serif';
ctx.fillStyle = 'grey';
ctx.fillText(msg, 250, 220);
ctx.beginPath();
ctx.strokeStyle = 'grey';
ctx.lineWidth = 5;

let text_width = ctx.measureText(msg).width;
ctx.moveTo(250, 220 - ctx.measureText(msg).actualBoundingBoxAscent - 10);
ctx.lineTo(250 + text_width, 220 - ctx.measureText(msg).actualBoundingBoxAscent - 10);
ctx.stroke();