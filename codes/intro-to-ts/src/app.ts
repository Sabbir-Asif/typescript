// function greeter(person: string) {
//     return "Hello, " + person;
//   }

//   let user = "Jane User";
// // let user = [0, 1, 2];

// console.log(greeter(user)); // Hello, Jane User`

// let x : "hello" = "hello"; // string literal type
// console.log(x); // hello

// x = "world";

// function f(s) {           // error: parameter s implicitly has an any type
//     console.log(typeof s); // string
// }

// interface Point {
//     readonly x: number;
//     readonly y: number;
//   }

//   const p1: Point = { x: 10, y: 20 };
//   p1.x++ // ❌ Error: Cannot assign to 'x' because it is a read-only property.

// function a() : undefined {
//     return null;
// }

// let a : any;

// function test (a: any) {
//     console.log(a.toFixed(2)); // 0.00
// }

// let b: unknown;

// function test2 (b: unknown) {

//     typeof(b) === 'number' ? console.log(b.toFixed(2)) : '';
// }

// const x = "hello" as any as number;
// console.log(x); // 0

// // Compiled with --strictNullChecks
// interface Entity {
//     name: string;
// }
// function validateEntity(e?: Entity) {
//     // Throw exception if e is null or invalid entity
// }
// function processEntity(e?: Entity) {
//     validateEntity(e);
//     let s = e!.name; // Assert that e is non-null and access name
// }


// type Person = {
//     name: 'Sabbir';
//     age: number;
// }

// const employee : Person = {
//     name: 'Asif',
//     age: 25
// }

// type Person = {
//     name: string;
//     age: number;
// }

// interface Employee {
//     employeeId: number;
// }


// // interface third extends Person, Employee {
// //     department: string;

// class myClass implements Person, Employee {
//     name: string;
//     age: number;
//     employeeId: number;
//     constructor(name: string, age: number, employeeId: number) {
//         this.name = name;
//         this.age = age;
//         this.employeeId = employeeId;
//     }
// }

// abstract class Person2 {
//     name: string;
//     age: number;
//     constructor(name: string, age: number) {
//         this.name = name;
//         this.age = age;
//     }
//     abstract getName(): string;
// }

// class Employee2 extends Person2 {
//     employeeId: number;
//     constructor(name: string, age: number, employeeId: number) {
//         super(name, age);
//         this.employeeId = employeeId;
//     }
//     getName(): string {
//         return this.name;
//     }
// }


