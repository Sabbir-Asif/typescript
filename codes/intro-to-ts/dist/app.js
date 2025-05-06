"use strict";
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
// class Base {
//     public name = 'Base';
// }
// class Derived extends Base {
//     constructor() {
//         super();
//         console.log(this.name); // Derived
//     }
//     getName() {
//         return this.name; // Base
//     }
//     setName(name: string) {
//         this.name = name; // Base
//     }
// }
// const derived = new Derived(); // Base
// derived.setName('Derived'); // Base
// console.log(derived.getName()); // Base
// console.log(Base.name); // Base
// interface Person {
//     readonly name: string;
//     readonly age: number;
// }
// let person: Person = {
//     name: 'Sabbir',
//     age: 25
// }
// console.log(person.name); // Sabbir
// console.log(person.age); // 25
// person.name = 'Asif'; // Error: Cannot assign to 'name' because it is a read-only property.
// person.age++; // Error: Cannot assign to 'age' because it is a read-only property.
// class MathOperations {
//     add(a: number, b: number): number;
//     add(a: string, b: string): string;
//     add(a: any, b: any): any {
//       return a + b;
//     }
//   }
//   const math = new MathOperations();
//   console.log(math.add(5, 10)); // Output: 15 (number addition)
//   console.log(math.add("Hello, ", "World!"));
// class Greeter {
//     readonly name: string = "world";
//     constructor(otherName?: string) {
//       if (otherName !== undefined) {
//         this.name = otherName;
//       }
//     }
//     greet() {
//       return "Hello, " + this.name;
//     }
// }  
// const g = new Greeter('Sabbir');
// console.log(g.greet()); // Hello, Sabbir`
// class Base {
//     k = 4;
// }
// class Derived extends Base {
//     m = 5;
//     constructor() {
//         this.m = 6;
//         // super();
//         // console.log(this.k);
//     }
// }
// type Colors = 'red' | 'green' | 'blue';
// type RGB = [red: number, green: number, blue: number];
// const pallate = {
//     red: [255, 0, 0],
//     green: [0, 255, 0],
//     blue: "#dgjedg"
// } as Record<Colors, RGB | string>;
// console.log(pallate.red.toUpperCase()); // 255,0,0
// console.log(pallate.blue.length);
// function add(a: number, b: number): number;
// function add(a: string, b: string): string;
// function add(a: unknown, b: any): any {
//   return a + b;
// }
// console.log(add(1, 2)); // 3
// console.log(add('1', 2)); // 3
// console.log(add({ name: 'hello' }, 2)); // "Hello World"
// const fun = (s: unknown) => {
//     console.log(s.toString()); // Error: Object is of type 'unknown'.
// }
// fun('hello'); // hello
// type GenericArray<T> = Array<T>;
// const myObjArray : GenericArray<{ name: string; age: number }> = [
//     {
//         name: 'Motahar',
//         age: 22,
//     },
//     {
//         name: "kuddus",
//         age: 23
//     }
// ]
// function identity<T>(arg : T) : T {
//     return arg;
// }
// identity('string');
// function getProperty<Type, Key extends keyof Type>(obj: Type, key: Key) {
//     return obj[key];
// }
// let x = { a: 1, b: 2, c: 3, d: 4 };
// getProperty(x, "a");
// getProperty(x, "m");
