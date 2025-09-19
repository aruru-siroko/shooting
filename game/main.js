document.getElementById("txt").innerText="これはゲームです";
const canvas=document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let x = 225;
let tama = 30;               
window.addEventListener("keydown",function(e)  {
    if(e.key === "ArrowLeft"){
        x -= 25;
    }else if(e.key === "ArrowRight"){
        x += 25;
    }else if(e.key === "space"){
        tama += 1;
    }  
});

let y = 0;
let z = -150;

function gameLoop(){
    ctx.fillStyle = "black";
ctx.fillRect(0,0,480,640);

ctx.fillStyle = "red";
ctx.fillRect(225,y,30,30);
y += 5;
ctx.fillStyle = "red";
ctx.fillRect(300,z,30,30);
z += 5;
ctx.fillStyle = "blue";
ctx.fillRect(x,480,30,30);
 if(tama > 0){
    ctx.fillStyle = "yellow"; 
    ctx.fillRect(x+10,470 -tama * 10,10,10);       
 }
requestAnimationFrame(gameLoop);
}

gameLoop();