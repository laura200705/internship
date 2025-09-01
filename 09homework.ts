// Interface with optional + readonly
interface Animal {
    readonly species: string; 
    age: number; 
    habitat: string; // optional
    makeSound(): void;
}

// Class implementing interface
class Bird implements Animal {
    readonly species: string;
    age: number;
    habitat: string;
    wingspan: number;

    constructor(species: string, age: number, wingspan: number, habitat: string) {
        this.species = species;
        this.age = age;
        this.wingspan = wingspan;
        this.habitat = habitat;
    }

    makeSound(): void {
        console.log(`${this.species} chirps!`);
    }

    fly(): void {
        console.log(`${this.species} is flying with wingspan of ${this.wingspan} cm`);
    }
}

// Function implementing interface
function describeAnimal(animal: Animal): void {
    console.log(`Species: ${animal.species}, Age: ${animal.age}`);
    if (animal.habitat) {
        console.log(`Habitat: ${animal.habitat}`);
    }
    animal.makeSound();
}

// Instances
const parrot = new Bird("Parrot", 3, 25, "Tropical forest");
parrot.makeSound();
parrot.fly();

const sparrow = new Bird("Sparrow", 1, 15, "Forest");
describeAnimal(sparrow);

