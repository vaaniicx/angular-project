import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  title: String = "Login";
  email: String = "";
  password: String = "";
  password_confirm: String = "";
}
