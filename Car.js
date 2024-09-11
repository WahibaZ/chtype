"use strict";
exports.__esModule = true;
var Car = /** @class */ (function () {
    function Car(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Car.prototype.start = function () {
        console.log("The car engine has started");
    };
    return Car;
}());
exports.Car = Car;
