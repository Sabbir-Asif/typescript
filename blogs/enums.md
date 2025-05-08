# Understanding Enums in TypeScript

When you want to write a code that has better readability, that means you want your code to be self explanatory  `enum` can be very helpful.  

Take a look at the following code, 

```ts
function handleDirection(direction : number) {
    if(direction === 1) moveUp();
    else if(direction === 2) moveDown();
    else if(direction === 3) moveLeft();
    else if(direction === 4) moveRight();
    else throw new Error("Invalid direction");
}
```

Here, we are using numbers to represent directions. This is not very readable. But if we use `enum` to represent the directions, it will be more intuitive. 

```ts
enum Direction {
    Up = 1,
    Down = 2,
    Left = 3,
    Right = 4,
}

function handleDirection(direction : Direction) {
    if(direction === Direction.Up) moveUp();
    else if(direction === Direction.Down) moveDown();
    else if(direction === Direction.Left) moveLeft();
    else if(direction === Direction.Right) moveRight();
    else throw new Error("Invalid direction");
}
```

Now, it looks much better right?

What if we forget to initialize the enum values? 

```ts
enum Direction {
    Up = 1,
    Down,
    Left,
    Right,
}
```

In this case, the values will be Up = 1, Down = 2, Left = 3, Right = 4. Why?  
Because, the numeric enums are auto incremented. That means when we declare the first enum value as 1. The next one will get the value 1 and increment it by 1. So, Down = 2, Left = 3, Right = 4.  

If we do not initialize any of the enum values, it will start from 0. 

```ts
enum Direction {
    Up,
    Down,
    Left,
    Right,
}
```

Here, the above code sets the values as Up = 0, Down = 1, Left = 2, Right = 3. 

***Remember** only `numeric enums` are auto incremented. Shortly we will see `string enums` they are not auto incremented.* 


## How do we use enums?
Enums are very easy to use. You can use them just like any other type by using the enum name and the enum value.

```ts
console.log(Direction.Up); // 0 
```

You can also use the enum value to get the name of the enum. 

```ts
console.log(Direction[0]); // Up
```

This is called **reverse mapping**. It is only available for `numeric enums`.

## String Enums
String enums are a bit different. **They are not auto incremented**. You have to assign a value to each enum value.  
For example, 

```ts
enum Role {
    Admin = "Admin",
    User = "User",
    Guest = "Guest",
}
```
Here, we have to assign a value to each enum value. If we do not assign a value, it will throw an error. 

```ts
enum Role {
    Admin = "admin",
    User,           // Error: Enum member must have initializer
    Guest = "guest",
}
```

Another type of enum is `Heterogeneous Enums`. This is a mix of string and numeric enums. 

```ts
enum Role {
    Admin = "admin",
    User = 1,
    Guest = "guest",
}
```

But this is not recommended. Because the idea of enums is to make your code clear and readable. Mixing string and numeric enums can make your code confusing.

## Enums at runtime

Enums at runtime becomes a real object. So, you can use them like any other object. 

```ts
enum Role {
    Admin = "admin",
    User = "User",
    Guest = "guest",
}

functtion getRole(obj : { Admin : string }) {
    return obj.Admin;
}
```
This will work. Because Role is an object at runtime and it has a property called Admin.

**But!** there is a catch. If you use `const` with enums, it will not be an object at runtime. It will be a type.
```ts
const enum Direction {
  Up,
  Down,
  Left,
  Right,
}
 
let directions = [
  Direction.Up,
  Direction.Down,
  Direction.Left,
  Direction.Right,
];
```

this will convert the directions to an array of numbers. 

```ts
let directions = [0, 1, 2, 3];
```

So, to wrap it up,
- Enums are a way to define a set of named constants.
- Enums can be numeric or string enums.
- Numeric enums are auto incremented.
- String enums are not auto incremented.
- Enums at runtime become an object.
- If you use `const` with enums, it will not be an object at runtime. It will be a type.

Happy coding!

References:
- [TypeScript Enums](https://www.typescriptlang.org/docs/handbook/enums.html)

