import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  submitForm(form: any) {
    if (form.valid) {
      console.log('Form submitted: ', form.value);
    } else {
      console.log('Form is invalid');
    }
  }
}
