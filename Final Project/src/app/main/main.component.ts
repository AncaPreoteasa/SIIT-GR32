import { Component , ViewEncapsulation} from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'main-component',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class MainComponent {

  downloadCvFile (){
    const link = document.createElement('a');
    link.setAttribute('target', '_blank');
    link.setAttribute('href', '/assets/CV-Europass-20190310-Preoteasa-EN-1.pdf');
    link.setAttribute('download', `CV-Europass-Anca-Preoteasa-EN-1.pdf`);
    document.body.appendChild(link);
    link.click();
    link.remove();

    Swal.fire({
      text:  "Successfully downloaded CV.",
      showCancelButton: false
    });
  }

  sendEmail() {
    let formEl = <HTMLFormElement>document.getElementsByClassName("form-container")[0];
    if (formEl.checkValidity()) {
      var data = new FormData(formEl);
      fetch("https://formspree.io/f/mwkjvgrp", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
      }).then(response => {
        if (response.ok) {
          formEl.reset();
          Swal.fire({
            text:  "Successfully sent email.",
            showCancelButton: false
          });
        } else {
          response.json().then(data => {
            if (Object.hasOwn(data, 'errors')) {
              Swal.fire({
                text:  "Failed to send email.",
                showCancelButton: false
              });
            } else {
              Swal.fire({
                text:  "Failed to send email.",
                showCancelButton: false
              });
            }
          })
        }
      }).catch(error => {
        Swal.fire({
          text:  "Failed to send email.",
          showCancelButton: false
        });
      });
    } else {
      Swal.fire({
        text:  "Please fill in the required fields.",
        showCancelButton: false
      });
    }
  }
}

