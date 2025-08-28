
abstract class Appliance {
    abstract turnOn(): void;
}


export class Fan extends Appliance {
    turnOn(): void {
        console.log("Fan is now ON, blowing air.");
    }
}


export class AirConditioner extends Appliance {
    turnOn(): void {
        console.log("Air conditioner is now ON, cooling the room.");
    }
}



