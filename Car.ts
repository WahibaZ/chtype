import { Vehicule } from './Vehicule';

export class Car implements Vehicule{
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
      }
    start():void{
        console.log(`The car engine has started`);
    }

}

