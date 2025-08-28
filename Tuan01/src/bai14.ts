class Employee{
    name: string;

    constructor(name: string){
        this.name = name;
    }

    displayInfo(){
        console.log(this.name)
    }
}

export class Manager extends Employee{
    role: string;

    constructor(name: string, role: string){
        super(name);
        this.role = role;
    }

    manageTask(){
        console.log("Taskkkk")
    }
}

export class Developer extends Employee{
    tool: string;
    constructor(name: string, tool: string){
        super(name);
        this.tool = tool;
    }

    code(){
        console.log(this.tool);
    }
}