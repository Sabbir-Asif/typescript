A **type predicate** in TypeScript is a special kind of return type for a function that **tells the compiler more about a type** — specifically, it **narrows** a type in a type-safe way at runtime.

---

### 🧠 Definition

A **type predicate** looks like this:

```ts
function isString(value: unknown): value is string
```

That `value is string` is the **type predicate** — it's saying:

> "If this function returns `true`, then `value` can be treated as a `string`."

---

### ✅ Use Case: Type Narrowing

Let’s say you get a value of `unknown` or `any`, and want to safely check its type.

#### Example:

```ts
function isString(value: unknown): value is string {
  return typeof value === 'string';
}

function printLength(value: unknown) {
  if (isString(value)) {
    // ✅ Here TypeScript knows it's a string
    console.log(value.length);
  } else {
    console.log('Not a string');
  }
}
```

Without the type predicate, TypeScript wouldn't know that `value` is a `string` inside the `if` block.

---

### ✅ Custom Type Guards with Type Predicates

You can also use them to narrow **custom types**.

#### Example with a union:

```ts
type Animal = { name: string };
type Dog = Animal & { bark: () => void };

function isDog(animal: Animal): animal is Dog {
  return 'bark' in animal;
}

function makeSound(animal: Animal) {
  if (isDog(animal)) {
    animal.bark(); // ✅ Safe to call
  } else {
    console.log(animal.name + ' makes a generic sound');
  }
}
```

* `isDog` is a **custom type guard** using a **type predicate**.
* It narrows the `Animal` to `Dog` when `true`.

---

### 🛠 Syntax Summary

```ts
function fn(arg: SomeType): arg is NarrowedType {
  // return true if arg is NarrowedType
}
```

* `arg is NarrowedType` is the type predicate.
* Used in control flow (`if`, `switch`) to narrow types safely.

---

### 🔥 Why it's powerful:

* Helps with type safety when working with `unknown`, `any`, or union types.
* Enables **user-defined type guards**, especially useful in libraries and real-world apps.


