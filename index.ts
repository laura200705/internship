//Online lesson
var someVar: string="Some String";
//someVar = 10;
console.log(someVar);



//FIRST ASSIGNMENT 06
//Declare 
let myNumber: number = 42;
let myString: string = "Hello TypeScript";
let myBoolean: boolean = true;

console.log("Number:", myNumber, "Type:", typeof myNumber);
console.log("String:", myString, "Type:", typeof myString);
console.log("Boolean:", myBoolean, "Type:", typeof myBoolean);

//Constant variable for a circle
const PI: number = 3.14159;
let radius: number = 7;
let circumference: number = 2 * PI * radius;

console.log(`Radius: ${radius}, Circumference: ${circumference}`);

//Array of my favorite foods
let favoriteFoods: string[] = ["Pizza", "Pasta", "Sushi", "Ice Cream"];

console.log("My favorite foods:");
for (let i = 0; i < favoriteFoods.length; i++) {
  console.log(favoriteFoods[i]);
}

//Age 
const age: number = 17;

if (age < 13) {
  console.log("You are a child.");
} else if (age < 20) {
  console.log("You are a teenager.");
} else {
  console.log("You are an adult.");
}

//The length of a string
let randomValue: any = "TypeScript is awesome!";
let stringLength: number = (randomValue as string).length;

console.log("Length of string:", stringLength);

//The sum of the numerical elements
let mixedArray: (number | string)[] = [10, "hello", 20, "world", 30];
let sum: number = 0;

for (let item of mixedArray) {
  if (typeof item === "number") {
    sum += item;
  }
}

console.log("Sum of numbers in mixed array:", sum);



//SECOND ASSIGNMENT 07
// Get first element

function getFirstElement<T>(array: T[]): T | undefined {
    return array.length > 0 ? array[0] : undefined;
}

console.log(getFirstElement<number>([10, 20, 30])); // 10
console.log(getFirstElement<string>(["a", "b", "c"])); // "a"
console.log(getFirstElement<boolean>([])); // undefined

// Create array from items
function createArray<T>(...items: T[]): T[] {
    return items;
}

console.log(createArray<number>(1, 2, 3, 4)); // [1,2,3,4]
console.log(createArray<string>("apple", "banana", "cherry")); // ["apple","banana","cherry"]
console.log(createArray<boolean>(true, false, true)); // [true,false,true]

// Check if array is empty
function isArrayEmpty<T>(array: T[]): boolean {
    return array.length === 0;
}

console.log(isArrayEmpty<number>([])); // true
console.log(isArrayEmpty<string>(["x"])); // false



//THIRD 08
// Base class Device
class Device {
    constructor(
        public height: number,
        public length: number,
        public weight: number,
        public screenSize: number
    ) {}

    turnOn(): void {
        console.log("Device is now ON");
    }

    turnOff(): void {
        console.log("Device is now OFF");
    }
}

// Child class Laptop
class Laptop extends Device {
    private _hasKeyboard: boolean;
    readonly brand: string; // readonly property
    static deviceType: string = "Laptop"; // static property

    constructor(height: number, length: number, weight: number, screenSize: number, hasKeyboard: boolean, brand: string) {
        super(height, length, weight, screenSize);
        this._hasKeyboard = hasKeyboard;
        this.brand = brand;
    }

    // getter and setter
    get hasKeyboard(): boolean {
        return this._hasKeyboard;
    }
    set hasKeyboard(value: boolean) {
        this._hasKeyboard = value;
    }

    openIDE(): void {
        console.log(`${this.brand} laptop is opening VS Code`);
    }

    static info(): void {
        console.log(`This is a ${Laptop.deviceType}`);
    }
}

// Child class Smartphone
class Smartphone extends Device {
    private _hasTouchScreen: boolean;
    readonly model: string;

    constructor(height: number, length: number, weight: number, screenSize: number, hasTouchScreen: boolean, model: string) {
        super(height, length, weight, screenSize);
        this._hasTouchScreen = hasTouchScreen;
        this.model = model;
    }

    get hasTouchScreen(): boolean {
        return this._hasTouchScreen;
    }
    set hasTouchScreen(value: boolean) {
        this._hasTouchScreen = value;
    }

    call(number: string): void {
        console.log(`${this.model} is calling ${number}`);
    }

    openCamera(): void {
        console.log(`${this.model} camera is open`);
    }

    shoot(): void {
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
abstract class Animal {
    constructor(public name: string) {}
    abstract makeSound(): void;
    move(): void {
        console.log(`${this.name} is moving`);
    }
}

class Dog extends Animal {
    makeSound(): void {
        console.log(`${this.name} says: Woof!`);
    }
}

class Cat extends Animal {
    makeSound(): void {
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



