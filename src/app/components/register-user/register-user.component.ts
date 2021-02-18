import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  registerClicked(username: any, email: any, phoneNumber: any, password: any) {
    var inputs = {
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };
  }
}
