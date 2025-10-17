import { player  ,initPlayer ,drawPlayer} from "./player.js";
import { enemies , spawnEnemy } from "./enemies.js";

const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

initPlayer (canvas);
spawnEnemy (canvas);

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

function update(){
    for(let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        bullet.y += bullet.vy;

        if(bullet.y < 0){
            bullets.splice(i, 1);
            i--;
        }
    }
}



function draw(){

    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
 
    drawPlayer(ctx);

    ctx.fillStyle = "white";
    for(let i = 0; i < bullets.length; i++) {
        const bullet = bullets[i];
        ctx.fillRect(bullet.x, bullet.y, bullet.width, bullet.height);
    }

    ctx.fillStyle = "red";
    for(let i = 0; i < enemies.length; i++) {
        const enemy = enemies[i];
        ctx.fillRect(enemy.x, enemy.y, enemy.width, enemy.height);
    }


}

function gameLoop(){
update();
draw();

requestAnimationFrame(gameLoop);
}

gameLoop();