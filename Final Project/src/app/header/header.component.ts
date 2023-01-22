import { Component , ViewEncapsulation} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HeaderComponent {
  startProgressBarTransition() {
    let sectionElement = document.getElementsByClassName("skill-bars-container")[0];
    sectionElement.classList.remove("progress-start");
    setTimeout(function() {
      sectionElement.classList.add("progress-start");
    });
  }

  slideProjectSectionHeadings() {
    let sectionElement = document.getElementsByClassName("projects-section")[0];
    sectionElement.classList.remove("project-animation-start");
    setTimeout(function() {
      sectionElement.classList.add("project-animation-start");
    });
  }

  @Output() toggleDarkThemeEvent = new EventEmitter<void>();
  isDarkTheme = false;
  
  collapsed = true;

  public onClickDarkTheme() {
    this.toggleDarkThemeEvent.emit();
  }
  
  toggleCollapsed(): void {
    this.collapsed = !this.collapsed;
  }
}