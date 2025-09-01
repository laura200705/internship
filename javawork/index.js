//Online lesson
var someVar = "Some String";
//someVar = 10;
console.log(someVar);
//FIRST ASSIGNMENT 06
//Declare 
let myNumber = 42;
let myString = "Hello TypeScript";
let myBoolean = true;
console.log("Number:", myNumber, "Type:", typeof myNumber);
console.log("String:", myString, "Type:", typeof myString);
console.log("Boolean:", myBoolean, "Type:", typeof myBoolean);
//Constant variable for a circle
const PI = 3.14159;
let radius = 7;
let circumference = 2 * PI * radius;
console.log(`Radius: ${radius}, Circumference: ${circumference}`);
//Array of my favorite foods
let favoriteFoods = ["Pizza", "Pasta", "Sushi", "Ice Cream"];
console.log("My favorite foods:");
for (let i = 0; i < favoriteFoods.length; i++) {
    console.log(favoriteFoods[i]);
}
//Age 
const age = 17;
if (age < 13) {
    console.log("You are a child.");
}
else if (age < 20) {
    console.log("You are a teenager.");
}
else {
    console.log("You are an adult.");
}
//The length of a string
let randomValue = "TypeScript is awesome!";
let stringLength = randomValue.length;
console.log("Length of string:", stringLength);
//The sum of the numerical elements
let mixedArray = [10, "hello", 20, "world", 30];
let sum = 0;
for (let item of mixedArray) {
    if (typeof item === "number") {
        sum += item;
    }
}
console.log("Sum of numbers in mixed array:", sum);
//SECOND ASSIGNMENT 07
// Get first element
function getFirstElement(array) {
    return array.length > 0 ? array[0] : undefined;
}
console.log(getFirstElement([10, 20, 30])); // 10
console.log(getFirstElement(["a", "b", "c"])); // "a"
console.log(getFirstElement([])); // undefined
// Create array from items
function createArray(...items) {
    return items;
}
console.log(createArray(1, 2, 3, 4)); // [1,2,3,4]
console.log(createArray("apple", "banana", "cherry")); // ["apple","banana","cherry"]
console.log(createArray(true, false, true)); // [true,false,true]
// Check if array is empty
function isArrayEmpty(array) {
    return array.length === 0;
}
console.log(isArrayEmpty([])); // true
console.log(isArrayEmpty(["x"])); // false
//THIRD 08
// Base class Device
class Device {
    height;
    length;
    weight;
    screenSize;
    constructor(height, length, weight, screenSize) {
        this.height = height;
        this.length = length;
        this.weight = weight;
        this.screenSize = screenSize;
    }
    turnOn() {
        console.log("Device is now ON");
    }
    turnOff() {
        console.log("Device is now OFF");
    }
}
// Child class Laptop
class Laptop extends Device {
    _hasKeyboard;
    brand; // readonly property
    static deviceType = "Laptop"; // static property
    constructor(height, length, weight, screenSize, hasKeyboard, brand) {
        super(height, length, weight, screenSize);
        this._hasKeyboard = hasKeyboard;
        this.brand = brand;
    }
    // getter and setter
    get hasKeyboard() {
        return this._hasKeyboard;
    }
    set hasKeyboard(value) {
        this._hasKeyboard = value;
    }
    openIDE() {
        console.log(`${this.brand} laptop is opening VS Code`);
    }
    static info() {
        console.log(`This is a ${Laptop.deviceType}`);
    }
}
// Child class Smartphone
class Smartphone extends Device {
    _hasTouchScreen;
    model;
    constructor(height, length, weight, screenSize, hasTouchScreen, model) {
        super(height, length, weight, screenSize);
        this._hasTouchScreen = hasTouchScreen;
        this.model = model;
    }
    get hasTouchScreen() {
        return this._hasTouchScreen;
    }
    set hasTouchScreen(value) {
        this._hasTouchScreen = value;
    }
    call(number) {
        console.log(`${this.model} is calling ${number}`);
    }
    openCamera() {
        console.log(`${this.model} camera is open`);
    }
    shoot() {
        console.log(`${this.model} takes a photo`);
    }
}
// Instances
const myLaptop = new Laptop(2, 35, 1.5, 15.6, true, "Asus");
myLaptop.turnOn();
myLaptop.openIDE();
console.log("Has keyboard:", myLaptop.hasKeyboard);
myLaptop.hasKeyboard = false;
console.log("Updated keyboard:", myLaptop.hasKeyboard);
Laptop.info();
const myPhone = new Smartphone(0.8, 15, 0.2, 6.5, true, "Samsung");
myPhone.turnOn();
myPhone.call("068172308");
myPhone.openCamera();
myPhone.shoot();
console.log("Touchscreen:", myPhone.hasTouchScreen);
// Abstract class Animal
class Animal {
    name;
    constructor(name) {
        this.name = name;
    }
    move() {
        console.log(`${this.name} is moving`);
    }
}
class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} says: Woof!`);
    }
}
class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} says: Meow!`);
    }
}
// Instances of animals
const dog = new Dog("Richard");
dog.makeSound();
dog.move();
const cat = new Cat("Kisunel");
cat.makeSound();
cat.move();
export {};
//# sourceMappingURL=index.js.map