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

    }

    var generateEnemy = function() {
        var randomNumber = Math.random()
        
    }

    return {
        update: update,
        x: x, y: y, width: width, height: height,
    }
});