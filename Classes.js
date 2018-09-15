function Shape()
{

}

Shape.prototype.X=0;
Shape.prototype.Y=0;

Shape.prototype.move = function(x,y)
{
    this.X = x;
    this.Y = y;
}


function Square()
{

}

Square.prototype = new Shape();
Square.prototype.__proto__ = Shape.prototype;
Square.prototype.area = function()
{
    return this.X*this.Y;
}

var s = new Square();
s.move(10,20);
console.log(s.area());