import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthenticationService } from '../../services/authentication.service';

const EMAIL_REGEX = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private AuthenticationService: AuthenticationService) { }

  ngOnInit() {
    this.createFormControls();
  }

  createFormControls() {
    this.loginForm = new FormGroup({
      email: new FormControl('', [
        Validators.required,
        Validators.pattern(EMAIL_REGEX)
      ]),
      password: new FormControl('', [
        Validators.required
      ])
    });
  }

  login() {
    const data = this.loginForm.value;
    console.log(data);
    this.AuthenticationService.login(data.email, data.password);
    // console.log(this.AuthenticationService.isAuthenticated);
  }

}
