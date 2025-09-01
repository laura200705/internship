// Class implementing interface
class Bird {
    species;
    age;
    habitat;
    wingspan;
    constructor(species, age, wingspan, habitat) {
        this.species = species;
        this.age = age;
        this.wingspan = wingspan;
        this.habitat = habitat;
    }
    makeSound() {
        console.log(`${this.species} chirps!`);
    }
    fly() {
        console.log(`${this.species} is flying with wingspan of ${this.wingspan} cm`);
    }
}
// Function implementing interface
function describeAnimal(animal) {
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
export {};
//# sourceMappingURL=09homework.js.map