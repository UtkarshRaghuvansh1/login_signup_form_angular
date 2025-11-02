import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-auth',
  imports: [FormsModule, NgClass],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.css',
})
export class AuthComponent {
  //Variable for visiblity of forms
  showSignUpForm = false;

  toggleForm() {
    console.log('button cliked');

    this.showSignUpForm = !this.showSignUpForm;
    console.log(this.showSignUpForm);
    return this.showSignUpForm;
  }
}
