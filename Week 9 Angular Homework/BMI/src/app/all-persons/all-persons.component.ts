import { Component, OnInit } from '@angular/core';
import { Person } from '../models/person.model';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'all-persons',
  templateUrl: './all-persons.component.html',
  styleUrls: ['./all-persons.component.css']
})
export class AllPersonsComponent implements OnInit {
  persons: Person[] = [];

  constructor(private personService: PersonService) {
  }

  ngOnInit(): void {
    this.persons = this.personService.getAllPersons();
  }

  title = 'BMI';
}
