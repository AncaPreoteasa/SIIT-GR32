import { Pipe, PipeTransform } from "@angular/core";
import { Person } from "../models/person.model";

@Pipe({name: 'bmiStatus'})
export class BmiStatusPipe implements PipeTransform {
    transform(person: Person) {
        let bmiValue = Math.floor(person.weight / (person.height * person.height));
        let bmiStatus;

        if (bmiValue < 18.5) {
            bmiStatus = "underweight";
        } else if (bmiValue >= 18.5 && bmiValue < 25) {
            bmiStatus = "normal";
        } else if (bmiValue >= 25 && bmiValue < 30) {
            bmiStatus = "overweight";
        } else {
            bmiStatus = "obese";
        }

        return bmiStatus;
    }
}