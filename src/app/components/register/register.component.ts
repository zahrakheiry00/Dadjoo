import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  invalidLogin = false;

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  registerClicked(username: any, email: any, phoneNumber: any, password: any) {
    var inputs = {
      username: password,
      email: username,
      phoneNumber: phoneNumber,
      password: password,
    };
    if (this.userService.register(inputs)) {
      //navigate to next page
    } else {
      this.invalidLogin = true;
    }
  }
}
