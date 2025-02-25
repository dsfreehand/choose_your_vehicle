// importing classes from other files
import inquirer from "inquirer";
import Truck from "./Truck.js";
import Car from "./Car.js";
import Motorbike  from "./Motorbike.js";
import Wheel from "./Wheel.js";

// define the Cli class
class Cli {
  // Complete: update the vehicles property to accept Truck and Motorbike objects as well
  // Complete: You will need to use the Union operator to define additional types for the array
  // Complete: See the AbleToTow interface for an example of how to use the Union operator
  vehicles: (Car | Truck | Motorbike)[]; // Added Truck and Motorbike objects to the vehicles property
  selectedVehicleVin: string | undefined;
  exit: boolean = false;

  // Complete: Update the constructor to accept Truck and Motorbike objects as well
  constructor(vehicles: (Car | Truck | Motorbike)[]) { // Updated the constructor to accept Truck and Motorbike objects as well
    this.vehicles = vehicles; 
  }

  // static method to generate a vin
  static generateVin(): string {
    // return a random string
    return (
      Math.random().toString(36).substring(2, 15) +
      Math.random().toString(36).substring(2, 15)
    );
  }

  // method to choose a vehicle from existing vehicles
  chooseVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'selectedVehicleVin',
          message: 'Select a vehicle to perform an action on',
          choices: this.vehicles.map((vehicle) => {
            return {
              name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
              value: vehicle.vin,
            };
          }),
        },
      ])
      .then((answers) => {
        // set the selectedVehicleVin to the vin of the selected vehicle
        this.selectedVehicleVin = answers.selectedVehicleVin;
        // perform actions on the selected vehicle
        this.performActions();
      });
  }

  // method to create a vehicle
  createVehicle(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleType',
          message: 'Select a vehicle type',
          // Complete: Update the choices array to include Truck and Motorbike
          choices: ['Car', 'Truck', 'Motorbike'], // Added options to select a car, truck, or motorbike
        },
      ])
      // Complete: add statements to create a truck or motorbike if the user selects the respective vehicle type
      .then((answers) => {
        if (answers.vehicleType === 'Car') {
          // create a car
          this.createCar();
        } else if (answers.vehicleType === 'Truck') {
          // create a truck
          this.createTruck();
        } else if (answers.vehicleType === 'Motorbike') {
          // create a motorbike
          this.createMotorbike();
        }
        
      });
  }

  // method to create a car
  createCar(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
          default: 'Red',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
          default: 'Toyota',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
          default: 'Corolla',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
          default: '2021',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
          default: '3000',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
          default: '120',
        },
      ])
      .then((answers) => {
        const car = new Car(
          // TODO: The generateVin method is static and should be called using the class name Cli, make sure to use Cli.generateVin() for creating a truck and motorbike as well!
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          []
        );
        // push the car to the vehicles array
        this.vehicles.push(car);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = car.vin;
        // perform actions on the car
        this.performActions();
      });
  }

  // method to create a truck
  createTruck(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
          default: 'Blue',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
          default: 'Ford',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
          default: 'F-150',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
          default: '2021',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
          default: '5000',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
          default: '100',
        },
        {
          type: 'input',
          name: 'towingCapacity',
          message: 'Enter Towing Capacity',
          default: '5000',
        },
      ])
      .then((answers) => {
        const truck = new Truck(
        // TODO: Use the answers object to pass the required properties to the Truck constructor
        // TODO: push the truck to the vehicles array
        // TODO: set the selectedVehicleVin to the vin of the truck
        // TODO: perform actions on the truck
        Cli.generateVin(),
        answers.color,
        answers.make,
        answers.model,
        parseInt(answers.year),
        parseInt(answers.weight),
        parseInt(answers.topSpeed),
        [], // This should be an array of Wheel objects, not a number
        parseInt(answers.towingCapacity), // Keep this as towingCapacity number
        
      );
        // push the car to the vehicles array
        this.vehicles.push(truck);
        // set the selectedVehicleVin to the vin of the car
        this.selectedVehicleVin = truck.vin;
        // perform actions on the car
        this.performActions();
      });
  }

  // method to create a motorbike
  createMotorbike(): void {
    inquirer
      .prompt([
        {
          type: 'input',
          name: 'color',
          message: 'Enter Color',
          default: 'Black',
        },
        {
          type: 'input',
          name: 'make',
          message: 'Enter Make',
          default: 'Ducati',
        },
        {
          type: 'input',
          name: 'model',
          message: 'Enter Model',
          default: 'Monster',
        },
        {
          type: 'input',
          name: 'year',
          message: 'Enter Year',
          default: '2021',
        },
        {
          type: 'input',
          name: 'weight',
          message: 'Enter Weight',
          default: '400',
        },
        {
          type: 'input',
          name: 'topSpeed',
          message: 'Enter Top Speed',
          default: '150',
        },
        {
          type: 'input',
          name: 'frontWheelDiameter',
          message: 'Enter Front Wheel Diameter',
          default: '17',
        },
        {
          type: 'input',
          name: 'frontWheelBrand',
          message: 'Enter Front Wheel Brand',
          default: 'Pirelli',
        },
        {
          type: 'input',
          name: 'rearWheelDiameter',
          message: 'Enter Rear Wheel Diameter',
          default: '17',
        },
        {
          type: 'input',
          name: 'rearWheelBrand',
          message: 'Enter Rear Wheel Brand',
          default: 'Pirelli',
        },
      ])
      .then((answers) => {
        // TODO: Use the answers object to pass the required properties to the Motorbike constructor
        // TODO: push the motorbike to the vehicles array
        // TODO: set the selectedVehicleVin to the vin of the motorbike
        // TODO: perform actions on the motorbike
        const motorbike = new Motorbike(
          Cli.generateVin(),
          answers.color,
          answers.make,
          answers.model,
          parseInt(answers.year),
          parseInt(answers.weight),
          parseInt(answers.topSpeed),
          [
            new Wheel(parseInt(answers.frontWheelDiameter), answers.frontWheelBrand),
            new Wheel(parseInt(answers.rearWheelDiameter), answers.rearWheelBrand)
          ]
       );
        // push the motorbike to the vehicles array
        this.vehicles.push(motorbike);
        // set the selectedVehicleVin to the vin of the motorbike
        this.selectedVehicleVin = motorbike.vin;
        // perform actions on the motorbike
        this.performActions();
      });
  }

  // method to find a vehicle to tow
  // TODO: add a parameter to accept a truck object
  findVehicleToTow(truck: Truck, performActions: Function): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'vehicleToTow',
          message: 'Select a vehicle to tow',
          choices: this.vehicles.map((vehicle) => ({
            name: `${vehicle.vin} -- ${vehicle.make} ${vehicle.model}`,
            value: vehicle,
          })),
        },
      ])
      .then((answers) => {
        const selectedVehicle = answers.vehicleToTow;
  
        // Check if the selected vehicle is the same as the truck trying to tow
        if (selectedVehicle === truck) {
          console.log('Truck cannot tow itself');
        } else {
          // Check if the truck's towing capacity is sufficient
          if (truck.towingCapacity >= selectedVehicle.weight) {
            console.log(`${truck.make} ${truck.model} (VIN: ${truck.vin}) is now towing ${selectedVehicle.make} ${selectedVehicle.model} (VIN: ${selectedVehicle.vin})`);
            // Add additional towing logic here
          } else {
            console.log(`The towing capacity of ${truck.make} ${truck.model} is not enough to tow ${selectedVehicle.make} ${selectedVehicle.model}`);
          }
        }
  
        // After the towing action, call performActions to go back to the main action loop
        this.performActions();
      });
  }

  // method to perform actions on a vehicle
  performActions(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'action',
          message: 'Select an action',
          // TODO: add options to tow and wheelie

          choices: [
            'Print details',
            'Start vehicle',
            'Accelerate 5 MPH',
            'Decelerate 5 MPH',
            'Stop vehicle',
            'Turn right',
            'Turn left',
            'Reverse',
            'Tow', // Added tow option
            'Wheelie', // Added wheelie option
            'Select or create another vehicle',
            'Exit',
          ],
        },
      ])
      .then((answers) => {
        // perform the selected action
        if (answers.action === 'Print details') {
          // find the selected vehicle and print its details
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].printDetails();
            }
          }
        } else if (answers.action === 'Start vehicle') {
          // find the selected vehicle and start it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].start();
            }
          }
        } else if (answers.action === 'Accelerate 5 MPH') {
          // find the selected vehicle and accelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].accelerate(5);
            }
          }
        } else if (answers.action === 'Decelerate 5 MPH') {
          // find the selected vehicle and decelerate it by 5 MPH
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].decelerate(5);
            }
          }
        } else if (answers.action === 'Stop vehicle') {
          // find the selected vehicle and stop it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].stop();
            }
          }
        } else if (answers.action === 'Turn right') {
          // find the selected vehicle and turn it right
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('right');
            }
          }
        } else if (answers.action === 'Turn left') {
          // find the selected vehicle and turn it left
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].turn('left');
            }
          }
        } else if (answers.action === 'Reverse') {
          // find the selected vehicle and reverse it
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              this.vehicles[i].reverse();
            }
          }
        }
        // TODO: add statements to perform the tow action only if the selected vehicle is a truck. Call the findVehicleToTow method to find a vehicle to tow and pass the selected truck as an argument. After calling the findVehicleToTow method, you will need to return to avoid instantly calling the performActions method again since findVehicleToTow is asynchronous.
        else if (answers.action === 'Tow') {
          // Find the selected vehicle and check if it is a truck
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              if (this.vehicles[i] instanceof Truck) {
                // If the selected vehicle is a truck, call the findVehicleToTow function to let the user choose a vehicle to tow
                this.findVehicleToTow(this.vehicles[i] as Truck, this.performActions);
                return; // Exit to avoid calling performActions immediately
                
              } else {
                console.log('Only trucks can tow');
                this.performActions();
              }
            }
          }
        }
        // TODO: add statements to perform the wheelie action only if the selected vehicle is a motorbike
        else if (answers.action === 'Wheelie') {
          for (let i = 0; i < this.vehicles.length; i++) {
            if (this.vehicles[i].vin === this.selectedVehicleVin) {
              if (this.vehicles[i] instanceof Motorbike) {
                (this.vehicles[i] as Motorbike).wheelie();
              } else {
                console.log('Only motorbikes can perform a wheelie');
              }
            }
          }
        }

        else if (answers.action === 'Select or create another vehicle') {
          // start the cli to return to the initial prompt if the user wants to select or create another vehicle
          this.startCli();
          return;
        } else {
          // exit the cli if the user selects exit
          this.exit = true;
        }
        if (!this.exit) {
          // if the user does not want to exit, perform actions on the selected vehicle
          this.performActions();
        }
      });
  }

  // method to start the cli
  startCli(): void {
    inquirer
      .prompt([
        {
          type: 'list',
          name: 'CreateOrSelect',
          message:
            'Would you like to create a new vehicle or perform an action on an existing vehicle?',
          choices: ['Create a new vehicle', 'Select an existing vehicle'],
        },
      ])
      .then((answers) => {
        // check if the user wants to create a new vehicle or select an existing vehicle
        if (answers.CreateOrSelect === 'Create a new vehicle') {
          this.createVehicle();
        } else {
          this.chooseVehicle();
        }
      });
  }
}

// export the Cli class
export default Cli;
