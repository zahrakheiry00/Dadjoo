import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
>>>>>>> change.
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register-user',
  templateUrl: './register-user.component.html',
  styleUrls: ['./register-user.component.scss'],
})
export class RegisterUserComponent implements OnInit {
  constructor(private userService: UserService, private router: Router) {}

  ngOnInit(): void {}
  registerClicked(username: any, email: any, phoneNumber: any, password: any) {
    var inputs = {
      username: username,
      email: email,
      phone: phoneNumber,
      password: password,
    };
    this.userService.registerClient({intext:JSON.stringify(inputs)}).subscribe((res) => {
      if (res.status == "200") {
        this.router.navigateByUrl('/users-profile');
      } else {

      }
    });

  }
}
