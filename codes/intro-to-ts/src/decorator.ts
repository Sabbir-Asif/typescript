function Logger(target: Function) {
    console.log(`Class ${target.name} is created`);
}

@Logger
class User {
    name: string;
    age: number;
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}