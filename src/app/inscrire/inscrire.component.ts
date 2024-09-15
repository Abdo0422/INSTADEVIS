import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inscrire',
  templateUrl: './inscrire.component.html',
  styleUrls: ['./inscrire.component.css']
})
export class InscrireComponent {
  constructor(private router: Router) { }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log('Form Submitted', form.value);
      this.router.navigate(['/']).then(() => {
        window.location.reload();
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
