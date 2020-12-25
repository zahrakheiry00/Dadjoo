import {
  Component,
  OnInit,
  ViewChild,
  Input,
  ElementRef,
  Output,
  EventEmitter,
} from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  // username:any;
  // password:any;
  invalidLogin = false;

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {}

  // login() {
  //   var inputs = {
  //     "password": this.password,
  //     "username": this.username
  //   }
  //   this.userService.login(inputs).subscribe(res => {
  //     localStorage.setItem("token",res.token)
  //     localStorage.getItem("token")
  //     if (res.status == 0) {
  //       this.snackBar.open(res.data, "", {
  //         duration: 3000,
  //       });
  //     }
  //     else {
  //       this.snackBar.open(res.data, "", {
  //         duration: 3000,
  //       });
  //     }
  //   })
  // }

  loginClicked(username: any, password: any) {
    var inputs = {
      password: password,
      username: username,
    };
    if (this.userService.login(inputs)) {
      //console.log(this.userService.login(inputs));
      this.router.navigateByUrl('test');
    } else {
      this.invalidLogin = true;
    }
  }
}
