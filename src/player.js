

var bird = (function (width, height, color, x, y, obstacle = false, velocity = 0, isDucking = false) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.obstacle = obstacle;
    this.velocity = velocity;
    this.isDucking = isDucking;


    var update = function () {
        ctx = gameArea.context;
        ctx.fillStyle = color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    };

    var onGround = function () {
        if (this.y === areaHeight - 10 - this.height) {
            return true;
        } else {
            return false;
        }
    }

    var getArea = function() {
        return (x = new area(x,y,width,height))
    }

    return {
        update: update, onGround: onGround, getArea: getArea,
        x: x, y: y, width: width, height: height, obstacle: obstacle, velocity: velocity, isDucking,
    }
});