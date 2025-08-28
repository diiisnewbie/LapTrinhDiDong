"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AirConditioner = exports.Fan = void 0;
class Appliance {
}
class Fan extends Appliance {
    turnOn() {
        console.log("Fan is now ON, blowing air.");
    }
}
exports.Fan = Fan;
class AirConditioner extends Appliance {
    turnOn() {
        console.log("Air conditioner is now ON, cooling the room.");
    }
}
exports.AirConditioner = AirConditioner;
