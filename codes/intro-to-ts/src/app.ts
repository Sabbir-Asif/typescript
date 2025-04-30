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

let a : any;

function test (a: any) {
    console.log(a.toFixed(2)); // 0.00
}

let b: unknown;

function test2 (b: unknown) {

    typeof(b) === 'number' ? console.log(b.toFixed(2)) : '';
}