import { UserToLogin } from './user-to-login';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', ],
      password: [''],
    });
  }

  login(){
    const userToLogin = this.loginForm.getRawValue() as UserToLogin;
    console.log(userToLogin);
  }

}
