import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  invalidLogin = false;

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void { }

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
      phone: phoneNumber,
      password: password,
      madarek: madarek,
    };
    this.userService.registerClient(inputs).subscribe((res) => {
      if (res.status == "200") {
        this.router.navigateByUrl('/users-profile');
      } else {
        this.invalidLogin = true;
      }
    });
  }
}
