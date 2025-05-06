"use strict";
{
    // this code demonstrates the necessity of type predicate
    //Base Class
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I am making sound");
        }
    }
    // Derived class Dog that inherits properties from Animal and adds a new method makeBark()
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log("I am barking");
        }
    }
    // Another derived class cat that inherits properties from Animal and adds a new method makeMeaw()
    class Cat extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeMeaw() {
            console.log("I am mewaing");
        }
    }
    // // a function without type predicate that check it the instance if of class Dog
    // const isDog = (animal: Animal) : boolean => {
    //     return animal instanceof Dog;
    // };
    // // a function without type predicate that check it the instance if of class Dog
    // const isCat = (animal: Animal) : boolean => {
    //     return animal instanceof Cat;
    // };
    // a function with type predicate that check it the instance if of class Dog
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    // a function with type predicate that check it the instance if of class Dog
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    /**
     * Discussion
     * if we do not use type predicate the function getAnimal can not identify the class of the object
     * it identifies the object as the parent class
     * if we use type predicate then we specifically declare the type of the object
     * so it does not give any error
     */
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMeaw();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("Dog Bhai", "dog");
    const cat = new Cat("Cat Bhai", "cat");
    getAnimal(cat);
    //
}
