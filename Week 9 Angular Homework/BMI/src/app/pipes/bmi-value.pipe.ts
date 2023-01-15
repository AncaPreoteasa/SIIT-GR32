import { Pipe, PipeTransform } from "@angular/core";
import { Person } from "../models/person.model";

@Pipe({name: 'bmiValue'})
export class BmiValuePipe implements PipeTransform {
    transform(person: Person) {
        return Math.floor(person.weight / (person.height * person.height));
    }
}