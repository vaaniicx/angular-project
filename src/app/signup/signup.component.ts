import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  title: String = 'Login';

  signUpForm: FormGroup = new FormGroup({
    email: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    password_confirm: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
    ]),
    company: new FormControl({ value: 'FH Technikum Wien', disabled: true }, [
      Validators.required,
    ]),
    address: new FormGroup({
      street: new FormControl(''),
      city: new FormControl(''),
      zip_code: new FormControl('', Validators.pattern('^[0-9]*$')),
    }),
  });

  constructor() {}

  ngOnInit(): void {}

  onClickSubmit(): void {}
}
