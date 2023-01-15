import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonDetailsComponent } from './person-details/person-details.component';
import { AllPersonsComponent } from './all-persons/all-persons.component';
import { BmiStatusPipe } from './pipes/bmi-status.pipe';
import { BmiValuePipe } from './pipes/bmi-value.pipe';
import { BmiDescriptionPipe } from './pipes/bmi-description.pipe';

@NgModule({

  declarations: [
    AppComponent,
    AllPersonsComponent,
    PersonDetailsComponent,
    BmiValuePipe,
    BmiStatusPipe,
    BmiDescriptionPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
