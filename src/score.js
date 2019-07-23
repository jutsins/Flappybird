var scoreDisplay = (function (x, y, score) {
    this.score = score;
    this.x = x;
    this.y = y;


    var update = function () {
        ctx = gameArea.context;
        ctx.font = "30px Arial";
        ctx.fillStyle = "black";
        ctx.fillText("score: " + score,x,y);
    };


    return {
        update: update,
        x: x, y: y, score: score,
    }
});