How **TypeScript** (or a type checker that works like TypeScript) **infers types** from **property assignments inside JavaScript classes**, because in **ES2015 (modern JavaScript classes)**, you don't actually "declare" properties like you would in TypeScript or other languages — you just assign them dynamically.

Here’s the key idea:

---
### 1. **No "native" property declarations in ES2015 classes**
- In JavaScript (ES2015 classes), when you define a class, you don't explicitly declare properties ahead of time like you do in other languages.
- Instead, you just **assign properties inside methods**, typically in the constructor.

Example:

```js
class C {
  constructor() {
    this.foo = 123; // Here we are dynamically assigning `foo`
  }
}
```
- JavaScript doesn’t "know" what `foo` is ahead of time — it's only created when the constructor runs.

---
### 2. **TypeScript (or any type checker) has to **_infer_** the types**
- TypeScript tries to guess (infer) types based on **how you assign values**.
- It mainly looks at assignments **inside the constructor** to infer the initial types.

Example:

```ts
class C {
  constructor() {
    this.x = 42;      // TypeScript infers x: number
    this.y = undefined; // TypeScript infers y: undefined
  }
}
```

- `x` is inferred as `number`.
- `y` starts as `undefined`, so **its type is unclear** until it’s assigned something else elsewhere.

---
### 3. **If you assign a property later in methods (not constructor)**:
- Properties assigned only inside methods (not the constructor) are treated as **optional** and their types are based on **all** the values they are assigned over the class.

Example:

```ts
class C {
  constructor() {}

  method1() {
    this.foo = "hello";  // first time we see `foo`
  }
  
  method2() {
    this.foo = 123;      // now `foo` must be (string | number)
  }
}
```
- `foo` is inferred as `string | number | undefined`, because:
  - It could be a `string`,
  - It could be a `number`,
  - It might **not exist yet** (since it’s never set in the constructor).

---
### 4. **Properties set in the constructor are assumed to **_always exist_**
- If a property is assigned inside the constructor, it’s considered always there.

Example:

```ts
class C {
  constructor() {
    this.bar = 42;   // bar is number
  }
  
  method() {
    this.bar = "oops"; // ❌ ERROR: Type 'string' is not assignable to type 'number'
  }
}
```

---
### 5. **Handling "unknown" properties** (tip using JSDoc)
- If you have a property that you **intend** to set later, and you want the type checker to know about it, **declare it with a type comment** inside the constructor.

Example using JSDoc:

```ts
class C {
  constructor() {
    /** @type {number | undefined} */
    this.value = undefined; // value might be set later
  }
}
```
- Now `value` is known to be `number | undefined`.

Even if you don't assign it immediately:

```ts
class C {
  constructor() {
    /** @type {number | undefined} */
    this.count;
  }
}
```
This way, TypeScript **won't guess wrong** about the property.

---
### 6. **Old-style Constructor Functions behave the same**
- Before ES2015 classes, people used **functions** to create classes.

Example:

```js
function C() {
  this.foo = 123;
}

C.prototype.bar = function () {
  this.foo = "hello";  // TypeScript will infer foo's type based on assignments
};
```

The **same rules apply** to infer types:
- Assignments in the constructor decide the main types.
- Assignments in methods add to the type.

---
# Summary in simple words:
| Aspect | Behavior |
|:---|:---|
| Assigned inside constructor | Always exists, type is based on initial value |
| Assigned only in methods | Considered optional (`undefined`) and type is based on **all** assigned values |
| No assignment ever | Treated as `any` or needs manual annotation |
| Constructor functions | Behave exactly like classes for inference |
