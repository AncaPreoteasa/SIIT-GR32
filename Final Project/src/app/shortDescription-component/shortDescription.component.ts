import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'shortDescription-component',
  templateUrl: './shortDescription.component.html',
  styleUrls: ['./shortDescription.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class ShortDescriptionComponent {
  downloadMyFile(){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '/assets/CV-Europass-20190310-Preoteasa-EN-1.pdf');
    link.setAttribute('download', `CV-Europass-Anca-Preoteasa-EN-1.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();
  }
}