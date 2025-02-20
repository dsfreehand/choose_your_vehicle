// import the Vehicle, Motorbike, Car, Wheel, and AbleToTow classes/interfaces
import Vehicle from './Vehicle.js';
import Car from './Car.js';
import Wheel from './Wheel.js';
import AbleToTow from '../interfaces/AbleToTow.js';

// Complete: The Motorbike class should extend the Vehicle class

class Motorbike extends Vehicle {
  // Complete: Declare properties of the Motorbike class

  // Complete: The properties should include vin, color, make, model, year, weight, top speed, and wheels
  // Complete: The types should be as follows: vin (string), color (string), make (string), model (string), year (number), weight (number), topSpeed (number), wheels (Wheel[])

 // moved these to the vehicle class

  // Complete: Create a constructor that accepts the properties of the Motorbike class
    // Complete: The constructor should call the constructor of the parent class, Vehicle
    // Complete: The constructor should initialize the properties of the Motorbike class
    // Complete: The constructor should check if the wheels array has 2 elements and create 2 new default Wheel objects if it does not
     // Constructor that accepts the properties of the Motorbike class
     constructor(vin: string, color: string, make: string, model: string, year: number, weight: number, topSpeed: number, wheels: Wheel[]) {
      // Call the constructor of the parent class (Vehicle)
      super(vin, color, make, model, year, weight, topSpeed, wheels);
      // Initialize the properties of the Motorbike class
      this.vin = vin;
      this.color = color;
      this.make = make;
      this.model = model;
      this.year = year;
      this.weight = weight;
      this.topSpeed = topSpeed;
  
      // Check if the wheels array has 2 elements, otherwise create 2 new default Wheel objects
      if (wheels.length !== 2) {
        this.wheels = [new Wheel(), new Wheel()]; // Default to two wheels if not provided
      } else {
        this.wheels = wheels; // Use the provided wheels array if it has 2 elements
      }
    }
    
    
  // TODO: Implement the wheelie method
    // TODO: The method should log the message "Motorbike [make] [model] is doing a wheelie!"
    wheelie() {
      console.log(`Motorbike ${this.make} ${this.model} is doing a wheelie!`);
    }

  // TODO: Override the printDetails method from the Vehicle class
  // TODO: The method should call the printDetails method of the parent class
  // TODO: The method should log the details of the Motorbike
  // TODO: The details should include the VIN, make, model, year, weight, top speed, color, and wheels
  override printDetails(): void {
    // Call the printDetails method of the parent class
    super.printDetails();
    // Log the details of the Motorbike
    console.log(`VIN: ${this.vin}`);
    console.log(`Color: ${this.color}`);
    console.log(`Make: ${this.make}`);
    console.log(`Model: ${this.model}`);
    console.log(`Year: ${this.year}`);
    console.log(`Weight: ${this.weight}`);
    console.log(`Top Speed: ${this.topSpeed}`);
    console.log(`Wheels: ${this.wheels.length} wheels (default wheels if less than 2)`);
}
}


// Export the Motorbike class as the default export

export default Motorbike;
