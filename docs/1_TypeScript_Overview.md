# TypeScript  

TypeScript is JavaScript’s runtime with a compile-time type checker

## TypeScript has a **Static Type Checker**

- TypeScript checks a program for errors before execution, and does so based on the kinds of values, making it a static type checker. For example, the last example above has an error because of the type of obj. Here’s the error TypeScript found:

```javascript
const obj = { width: 10, height: 15 };
const area = obj.width * obj.heigth;

error: Property 'heigth' does not exist on type '{ width: number; height: number; }'. Did you mean 'height'?
```

## TypeScript is a **Super Set** of JavaScript

-  This means you can take any working JavaScript code and put it in a TypeScript file without worrying about exactly how it is written.

## Erased Types

- Roughly speaking, once TypeScript’s compiler is done with checking your code, it erases the types to produce the resulting “compiled” code. This means that once your code is compiled, the resulting plain JS code has no type information.