import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllPersonsComponent } from './all-persons/all-persons.component';
import { PersonDetailsComponent } from './person-details/person-details.component';

const routes: Routes = [
  { path: 'all-persons', component: AllPersonsComponent },
  { path: 'person-details', component: PersonDetailsComponent },
  { path: '**', component: AllPersonsComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
