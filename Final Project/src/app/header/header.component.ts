import { Component , ViewEncapsulation} from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'header-component',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class HeaderComponent {

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