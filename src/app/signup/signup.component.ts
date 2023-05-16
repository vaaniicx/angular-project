import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  title: String = 'Login';
  email: String = '';
  password: String = '';
  password_confirm: String = '';
  company: String = 'FH Technikum Wien';
  street: String = '';
  city: String = '';
  zip_code: String = '';
}
