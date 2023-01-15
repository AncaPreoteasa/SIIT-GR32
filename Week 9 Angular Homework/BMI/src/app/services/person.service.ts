import {Injectable} from '@angular/core';
import {Person} from '../models/person.model';

@Injectable({
    providedIn: 'root',
})
export class PersonService {
    constructor() {}

    getAllPersons(): Person[] {
        return [
            {
                id: "10",
                name: 'John Doe',
                weight: 90,
                height: 1.90
            },
            {
                id: "11",
                name: 'Marry Jane',
                weight: 55,
                height: 1.75
            },
            {
                id: "12",
                name: 'Bill Gates',
                weight: 70,
                height: 1.60
            }
        ]
    }
}