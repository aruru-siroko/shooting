const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

const player = {
    x: canvas.width / 2 - 15,
    y: canvas.height - 60,
    width: 30,
    height: 30,
    color: "pink",
    life: 3
};

const bullets = [];
const BULLET_SPEED = -12;

function tryshoot() {
       bullets.push({
         x: player.x,
         y: player.y,
        width: 5,
        height: 5,
        vy: BULLET_SPEED,
    })
}

         
window.addEventListener("keydown", (e)   => {
    if(e.key === "ArrowLeft"){
        if(player.x > 0){
       player.x -= 25;
        }
    }else if(e.key === "ArrowRight"){
        if(player.x < canvas.width - player.width - 25){
            player.x += 25;
        }
    }else if(e.code === "Space"){
        tryshoot();
    }  
});

function draw(){

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = player.color;
    ctx.fillRect(player.x, player.y, player.width, player.height);

    ctx.fillStyle = "white";
    for(let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    }

}

function gameLoop(){
update();
draw();

requestAnimationFrame(gameLoop);
}

gameLoop();