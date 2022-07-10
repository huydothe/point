import {Point2d} from "./point2d";

class Point3d extends Point2d {
    z:number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }
    getZ=()=>this.z;
    setZ=(z)=>this.z=z;

    GetXYZ=()=>` x:${this.x} \n y:${this.y} \n z:${this.z}`
}

let point3d=new Point3d(12,34,11);
console.log(point3d.GetXYZ());