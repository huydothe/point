"use strict";
exports.__esModule = true;
exports.Point2d = void 0;
var Point2d = /** @class */ (function () {
    function Point2d(x, y) {
        var _this = this;
        this.getX = function () { return _this.x; };
        this.getY = function () { return _this.y; };
        this.setX = function (x) { return _this.x = x; };
        this.setY = function (y) { return _this.y = y; };
        this.GetXY = function () { return "x:".concat(_this.x, " ; y:").concat(_this.y); };
        this.x = x;
        this.y = y;
    }
    return Point2d;
}());
exports.Point2d = Point2d;
var point = new Point2d(12, 30);
console.log(point.GetXY());
