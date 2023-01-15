import { Pipe, PipeTransform } from "@angular/core";
import { Person } from "../models/person.model";

@Pipe({name: 'bmiDescription'})
export class BmiDescriptionPipe implements PipeTransform {
    transform(person: Person) {
        let bmiValue = Math.floor(person.weight / (person.height * person.height));
        let bmiDescription ;

        if (bmiValue < 18.5) {
            bmiDescription = "An underweight person is a person whose body weight is considered too low to be healthy. A person who is underweight is malnourished."
        } else if (bmiValue >= 18.5 && bmiValue < 25) {
            bmiDescription = "Ideal body weight (IBW) was initially introduced by Ben J. Devine in 1974 to allow estimation of drug clearances in obese patients."
        } else if (bmiValue >= 25 && bmiValue < 30) {
            bmiDescription = "Being overweight or fat is having more body fat than is optimally healthy. Being overweight is especially common where food supplies are plentiful and lifestyles are sedentary."
        } else {
            bmiDescription = "Obesity is a medical condition, sometimes considered a disease,[8][9][10] in which excess body fat has accumulated to such an extent that it may negatively affect health."
        }

        return bmiDescription;
}
}