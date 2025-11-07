export const enemies = [];
const SIZE = 26;
const enemyImage = new Image();
enemyImage.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinl4gIT4fCalYwr0MXiPalCXkMlX_tUjY__HJaZ2AHZBfeu6hX62cpOI7-xbPb0VSgIqKEDhqq3ACrrbYahUdeZj4pKjoVfqcvHxnGc0CRR8zw7siXa-QJB0RbNXrFbxWyyh64Owe6V9c/s400/sentouki.png/enemy.png";

function pushEnemies(canvas) {
const w= SIZE;
const h= SIZE;
const x = Math.random() * (canvas.width - w);
const y = 0;
const vy = 5

enemies.push({x,y,width:w,height:h,vy});
}

export function spawnEnemy(canvas) {
    if(enemies.length < 6){
    pushEnemies(canvas);
    }
}




 export function updateEnemies(canvas) {
   for (let i = enemies.length - 1; i >= 0; i--) {
     const e = enemies[i];
     e.y += e.vy;
     if (e.y > canvas.height) {
       enemies.splice(i, 1);
     }
   }
 }

 export function drawEnemies(ctx) {
   ctx.fillStyle = "crimson";
   for (const e of enemies) {
     ctx.drawImage(enemyImage.x, e.y, e.width, e.height);
 }
}
