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
  invalidLogin = false;
  pageMode = 'client';

  constructor(
    private userService: UserService,
    private snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit() {
    if (this.router.url.includes('client')) this.pageMode = 'client';
    else {
      this.pageMode = 'expert';
    }
  }

  loginClicked(username: any, password: any) {
    var inputs = {
      tpass: password,
      tusername: username,
    };
    this.userService.login(inputs).subscribe((res) => {
      if (res.status == "200") {
        localStorage.setItem('token', res.data.token);
        if(this.pageMode=='client'){
          this.router.navigateByUrl('users-profile');
        }
        else{
          this.router.navigateByUrl('experts-profile');
        }
      } else {
        this.invalidLogin = true;
      }
    });
  }
}
