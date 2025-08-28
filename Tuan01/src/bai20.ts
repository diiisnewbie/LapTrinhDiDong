
interface Vehicle {
    brand: string;
    speed: number;

    getInfo(): string;
}

export class Car1 implements Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number = 0) {
        this.brand = brand;
        this.speed = speed;
    }

    getInfo(): string {
        return `Car: ${this.brand}, Speed: ${this.speed} km/h`;
    }
}

export class Bike implements Vehicle {
    brand: string;
    speed: number;

    constructor(brand: string, speed: number = 0) {
        this.brand = brand;
        this.speed = speed;
    }

    getInfo(): string {
        return `Bike: ${this.brand}, Speed: ${this.speed} km/h`;
    }
}
