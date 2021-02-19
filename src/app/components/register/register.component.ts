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

  registerClicked(
    speciality?: any,
    username?: any,
    email?: any,
    phoneNumber?: any,
    password?: any,
    madarek?: any
  ) {
    var inputs = {
      speciality: speciality,
      username: username,
      email: email,
      phoneNumber: phoneNumber,
      password: password,
      madarek: madarek,
    };
    this.userService.expert_register(inputs).subscribe((res) => {
      // localStorage.setItem('token', res.token);
      // if (res.status == 0) {
      //   this.router.navigateByUrl('users-profile');
      // } else {
      //   this.invalidLogin = true;
      // }
    });
  }
}
