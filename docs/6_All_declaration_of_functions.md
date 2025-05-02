# All Ways to Declare Functions in TypeScript (with Best Use Cases)

TypeScript supports various ways to declare functions. Here's a complete list with examples and when to use each.

---

## 1. **Function Declaration**

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
````

**Best for:** Top-level named functions, reusable helpers, and readability.

---

## 2. **Function Expression**

```ts
const greet = function(name: string): string {
  return `Hello, ${name}`;
};
```

**Best for:** Assigning functions to variables, passing as arguments, or IIFEs.

---

## 3. **Arrow Function**

```ts
const greet = (name: string): string => {
  return `Hello, ${name}`;
};
```

**Best for:** Inline functions, callbacks, or anywhere `this` binding is not needed.

---

## 4. **Function Type Annotation with Variable**

```ts
const greet: (name: string) => string = (name) => {
  return `Hello, ${name}`;
};
```

**Best for:** Explicit typing, API exposure, passing to high-order functions.

---

## 5. **Function in Interface or Object (Method Signature)**

```ts
interface Greeter {
  greet(name: string): string;
}

const greeter: Greeter = {
  greet(name) {
    return `Hello, ${name}`;
  }
};
```

**Best for:** Defining method shapes in objects or enforcing APIs.

---

## 6. **Function via Type Alias**

```ts
type GreetFn = (name: string) => string;

const greet: GreetFn = (name) => `Hello, ${name}`;
```

**Best for:** Reusable types for callbacks or libraries.

---

## 7. **Class Method**

```ts
class Greeter {
  greet(name: string): string {
    return `Hello, ${name}`;
  }
}
```

**Best for:** Object-oriented programming and reusable components.

---

## 8. **Constructor Function (With `this`)**

```ts
function Person(this: any, name: string) {
  this.name = name;
}
```

**Best for:** Legacy JS code or creating objects without classes. **Use classes in modern TypeScript.**

---

## 9. **Function with `this` Parameter**

```ts
function sayHello(this: { name: string }, greeting: string): string {
  return `${greeting}, ${this.name}`;
}
```

**Best for:** Controlling `this` in `call`, `apply`, or DOM callbacks.

---

## 10. **Generic Function**

```ts
function identity<T>(value: T): T {
  return value;
}
```

**Best for:** Reusable utilities (like array, object helpers), library code, and type-safe wrappers.

---

## 11. **Function with Optional / Default / Rest Parameters**

```ts
function greet(name: string = 'Guest', age?: number, ...tags: string[]): string {
  return `Hi ${name}, Age: ${age ?? 'unknown'}, Tags: ${tags.join(', ')}`;
}
```

**Best for:** Flexible APIs with varying argument lengths and defaults.

---

## 12. **Immediately Invoked Function Expression (IIFE)**

```ts
(function () {
  console.log("This runs immediately");
})();
```

**Best for:** Module-level encapsulation or one-time setup.

---

## 🧠 Summary Table

| Style                        | Example Syntax                        | Best Use Case                       |
| ---------------------------- | ------------------------------------- | ----------------------------------- |
| Function Declaration         | `function fn(...) {}`                 | Reusable named functions            |
| Function Expression          | `const fn = function(...) {}`         | Assigning, scoping                  |
| Arrow Function               | `const fn = (...) => {}`              | Short callbacks, no `this`          |
| Function Type Annotation     | `const fn: (x: T) => R = (...) => {}` | Explicit typing for variables       |
| Interface/Method Signature   | `interface I { fn(x: T): R }`         | Structuring APIs or object shapes   |
| Type Alias Function          | `type Fn = (x: T) => R`               | Reusable function types             |
| Class Method                 | `class C { fn(x: T): R {} }`          | Object-oriented designs             |
| Constructor Function         | `function Fn(this: any, ...)`         | Legacy patterns, rare in TypeScript |
| Function with `this` Param   | `function fn(this: Context, ...)`     | Custom `this` in callbacks          |
| Generic Function             | `function fn<T>(arg: T): T`           | Reusable utilities                  |
| Optional/Rest/Default Params | `fn(x = val, y?: T, ...rest: T[])`    | APIs with flexible parameter lists  |
| IIFE                         | `(function () { ... })();`            | One-time logic or initialization    |


