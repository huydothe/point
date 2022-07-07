export class Point2d {
    x:number;
    y:number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    getX=()=>this.x;
    getY=()=>this.y;

    setX=(x)=>this.x=x;
    setY=(y)=>this.y=y;

     GetXY=()=>` Tọa độ x : ${this.x}, tọa độ y : ${this.y}`

}