const player Image = new Image();
 Image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgHg7kqU6h2oSJl6iB8avU0fcYId2cZeQvKnqsLnX_jbRWtGw06LWNFo2GQI0x7rJ7iSFZCnta6h3GB9RxDnvd6xeJFST__18_URa-M9urG7uhWckfyoqnjeU_dUxjTGe0XzIPKF1AagZs/s450/war_zerosen.png";

export const player = {
    x: 0,
    y: 0,
    width: 30,
    height: 30,
    color: "pink",
    life: 3,
    score: 0,
};

export function initPlayer(canvas) {
    player.x = canvas.width / 2 -player.width /2;
    player.y = canvas.height -60;
    console.log("Player:",player);
}

 export function drawPlayer(ctx) {
    ctx.drawImage(playerImage.x, player.y, player.width, player.height);
 }
