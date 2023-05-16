import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css'],
})
export class SigninComponent implements OnInit {
  title: String = 'Sign-In';

  form_data: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', Validators.required),
  });

  constructor() {}

  ngOnInit(): void {}

  onSubmit(): void {
    if (
      this.form_data.controls['email'].value == 'test@test.at' &&
      this.form_data.controls['password'].value == '123456789'
    ) {
      console.log('Login successful');
    } else {
      console.log('Login failed');
    }
  }
}
