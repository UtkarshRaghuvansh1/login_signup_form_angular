import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-auth',
  imports: [FormsModule],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  //Variable for visiblity of forms
  showSignUpForm = false;

  toggleForm() {
    return !this.showSignUpForm;
  }
}
