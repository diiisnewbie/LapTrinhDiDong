
export class Animal {
    protected makeSound(): string {
        return "Some generic animal sound";
    }

    public speak(): void {
        console.log(this.makeSound());
    }
}


export class Dog extends Animal {
    protected makeSound(): string {
        return "Woof! Woof!";
    }
}


export class Cat extends Animal {
    protected makeSound(): string {
        return "Meow! Meow!";
    }
}
