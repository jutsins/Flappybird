var obstacle = (function (width, height, color, x, y) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;


    var update = function () {
        ctx = gameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    var collidesWithPlayer = function() {

    };

    return {
        update: update,
        x: x, y: y, width: width, height: height,
    }
});

var obstacleGenerator = (function() {
    var generate = function(){
        var randomNumber = Math.random();
        if (randomNumber < 0.10){
            //double bird
            obstacles.push(
                new obstacle(20,20,"black", areaWidth, areaHeight - 60),
                new obstacle(20,20,"black", areaWidth + 25, areaHeight - 100),
                )
        }
        if (randomNumber >= 0.10 && randomNumber < 0.20){
            //tripple cactus
            obstacles.push(
                new obstacle(10,30, "green", areaWidth, areaHeight - 40),
                new obstacle(10,30,"green", areaWidth + 30, areaHeight- 40),
                new obstacle(10,30,"green", areaWidth + 60, areaHeight- 40)
            )
        }
        if (randomNumber >= 0.20 && randomNumber < 0.40){
            //spawn two cacti
            obstacles.push(
                new obstacle(10,30, "green", areaWidth, areaHeight - 40),
                new obstacle(10,30,"green", areaWidth + 35, areaHeight- 40)
            )
        }
        if (randomNumber >= 0.40 && randomNumber < 0.80){
            //spawn a single cactus
            obstacles.push(new obstacle(10, 30, "green", areaWidth, areaHeight - 40));
        }
        if (randomNumber >= 0.80){
            //spawn a single bird
            obstacles.push(new obstacle(20,20,"black", areaWidth, areaHeight - 60));
        }
    }
    return {
        generate:generate,
    }

});