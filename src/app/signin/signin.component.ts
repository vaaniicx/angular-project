import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  title: String = 'Sign-In';

  signInForm: FormGroup;

  constructor() {
    this.signInForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.email,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl('', Validators.required),
    });
  }

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.signInForm.invalid) {
      return;
    }

    if (
      this.signInForm.controls['email'].value == 'test@test.at' &&
      this.signInForm.controls['password'].value == '123456789'
    ) {
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  }
}
