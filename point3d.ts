import {Point2d} from "./point2d";

class Point3d extends Point2d {
    z:number;

    constructor(x: number, y: number, z: number) {
        super(x, y);
        this.z = z;
    }
    getZ=()=>this.z;
    setZ=(z)=>this.z=z;

    GetXYZ=()=>` Tọa độ x : ${this.x}, tọa độ y : ${this.y}, tọa độ z : ${this.z}`;
}