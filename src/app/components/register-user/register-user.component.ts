import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  constructor(private userService: UserService) {}

  ngOnInit(): void {}
  registerClicked(username: any, email: any, phoneNumber: any, password: any) {
    var inputs = {
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
    };
    this.userService.register(inputs).subscribe((res) => {
      // localStorage.setItem('token', res.token);
      // if (res.status == 1) {
      //   this.router.navigateByUrl('users-profile');
      // } else {
      //   this.invalidLogin = true;
      // }
    });
  }
}
