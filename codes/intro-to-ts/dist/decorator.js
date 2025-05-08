"use strict";
// // function Logger(target: Function) {
// //     console.log(`Class ${target.name} is created`);
// // }
// // @Logger
// // class User {
// //     name: string;
// //     age: number;
// //     constructor(name: string, age: number) {
// //         this.name = name;
// //         this.age = age;
// //     }
// // }
// function enumerable(value: boolean) {
//     return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
//         descriptor.enumerable = value;
//         console.log("target: ",target);
//         console.log("propertyKey: ",propertyKey);
//         console.log("descriptor: ",descriptor);
//     };
// }
// // ---cut---
// class Greeter {
//     greeting: string;
//     constructor(message: string) {
//         this.greeting = message;
//     }
//     @enumerable(false)
//     greet() {
//         return "Hello, " + this.greeting;
//     }
// }
// class Person {
//     name: string;
//     age: number;
//     constructor() {
//         this.name = "Sabbir";
//         this.age = 25;
//     }
// }
// const person = new Person();
// console.log(person.name); // Output: Sabbir 
// async function fetchData(url: string): Promise<any> {
//     const response = await fetch(url);
//     if (!response.ok) {
//         throw new Error(`HTTP error! status: ${response.status}`);
//     }
//     return response.json();
// }
// type user = {
//     id: number;
//     name: string;
// }
// type Fetchuser = () => Promise<user>;
// const fetchUser : Fetchuser = async () => {
//     return { id: 123, name: "Alice" };
// }
// const FetchURL = async () => {
//     type User = Awaited<ReturnType<typeof fetchUser>>;
//     const user : User = await fetchUser();
// }
