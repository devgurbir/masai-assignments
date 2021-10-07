class Rectangle{
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    getArea(){
        return this.x * this.y
    }
}

class Square extends Rectangle{
    constructor(x){
        super(x, x)
    }
}
