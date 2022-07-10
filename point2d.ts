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

     GetXY=()=>`x:${this.x} ; y:${this.y}`;
}

let point =new Point2d(12,30);
console.log(point.GetXY());