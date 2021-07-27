import {Spacecraft, Containership} from './base-ships'
import {MilenniumFalcon} from './start-fighters'

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperspace()

let falcon = new MilenniumFalcon() 
falcon.jumpIntoHyperspace();

let goodForTheJob = (ship: Containership) => ship.cargoContainers > 2

console.log(`Is falcon good for the job? ${goodForTheJob(falcon) ? 'yes' : 'no'}`)