import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Person } from '../models/person.model';
import { PersonService } from '../services/person.service';

@Component({
  selector: 'app-person-details',
  templateUrl: './person-details.component.html',
  styleUrls: ['./person-details.component.css']
})
export class PersonDetailsComponent implements OnInit {

  person : Person = {} as Person;

  constructor(
    private route: ActivatedRoute,
    private personService: PersonService
  ) {}

  ngOnInit():void {
    this.route.queryParams.subscribe(params => {
      let personId:string = params['id'];
      let allPersons:Person[] = this.personService.getAllPersons();

      for (let aPerson of allPersons) {
        if (personId === aPerson.id) {
          this.person = aPerson;
          break;
        }
      }
    });
  }
}
