"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var point2d_1 = require("./point2d");
var Point3d = /** @class */ (function (_super) {
    __extends(Point3d, _super);
    function Point3d(x, y, z) {
        var _this = _super.call(this, x, y) || this;
        _this.getZ = function () { return _this.z; };
        _this.setZ = function (z) { return _this.z = z; };
        _this.GetXYZ = function () { return " x:".concat(_this.x, " \n y:").concat(_this.y, " \n z:").concat(_this.z); };
        _this.z = z;
        return _this;
    }
    return Point3d;
}(point2d_1.Point2d));
var point3d = new Point3d(12, 34, 11);
console.log(point3d.GetXYZ());
