import { Component, OnInit } from '@angular/core';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user: User = {
    username: '',
    password: ''
  };

  constructor() { }
  ngOnInit() { }

  // Using the object destructuring to fetch the value and valid properties
  // from the #loginForm reference we exported and passed into onSubmit.
  onSubmit({ value, valid } : { value: User, valid: boolean}) {
    console.log(value, valid);
  }
}
