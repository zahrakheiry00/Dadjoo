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

  loginClicked(username: any, password: any) {
    var inputs = {
      tpass: password,
      tusername: username,
    };
    this.userService.login(inputs).subscribe((res) => {
      localStorage.setItem('token', res.token);
      if (res.status == 0) {
        this.router.navigateByUrl('users-profile');
      } else {
        this.invalidLogin = true;
      }
    });
  }
}
