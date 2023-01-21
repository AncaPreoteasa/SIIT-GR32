import { Component , ViewEncapsulation} from '@angular/core';
import { elementAt } from 'rxjs';

@Component({
  selector: 'skills-section',
  templateUrl: './skills-section.component.html',
  styleUrls: ['./skills-section.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class SkillsSectionComponent {
  constructor() {
    /*
      setTimeout(() => {
      let element = document.querySelector(".skills-section");
      let observer = new IntersectionObserver(entries => {
        element?.classList.toggle("show-progressbar-transition", entries[0].isIntersecting);
      });
      if (element) {
        observer.observe(element); 
      }
    }, 1000);
    */
  }
}
