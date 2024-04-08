var car = /** @class */ (function () {
    function car() {
    }
    return car;
}());
var carkw = /** @class */ (function () {
    function carkw() {
        this.Feature = "N/A";
    }
    return carkw;
}());
var kw1 = new carkw();
kw1.Color = "Blue";
kw1.Feature = "Euro-2";
var kw2 = new carkw();
kw2.Color = "Silver";
//let kw : string []=["Blue","Euro-2"];
var car1 = car_ManNMod("Suzuki", "2023", kw1);
var car2 = car_ManNMod("Honda", "2024", kw2);
console.log("\n My First Car ");
console.log("My Car Manufacturer is " + car1.Manufacturer);
console.log("My Car Model is " + car1.Model);
console.log("My Car Color is " + car1.Color);
console.log("My Car Feature is " + car1.Feature);
console.log("\n My Second Car ");
console.log("My Car Manufacturer is " + car2.Manufacturer);
console.log("My Car Model is " + car2.Model);
console.log("My Car Color is " + car2.Color);
console.log("My Car Feature is " + car2.Feature);
function car_ManNMod(manu, mod, arg) {
    var Car = new car();
    Car.Manufacturer = manu;
    Car.Model = mod;
    Car.Color = arg.Color;
    Car.Feature = arg.Feature;
    return Car;
}
