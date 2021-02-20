import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.scss']
})
export class UserInfoComponent implements OnInit {
  @Input() pageMode: any;
  userInfo: any;
  name = "زهرا";
  lname = "خیری";
  phone = "0912222222"
  email = "zahra@zahra";
  address = "کرج";
  desc = "تست";

  cname = "زهرا";
  clname = "خیری";
  cphone = "0912222222"
  cemail = "zahra@zahra";
  caddress = "کرج";
  cdesc = "تست";

  ename = "محمد";
  elname = "رضایی";
  ephone = "0912222222"
  eemail = "m@m";
  eaddress = "کرج";
  edesc = "تست";

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit() {
    if (this.router.url.includes('users-profile')) {
      this.name = this.cname;
      this.lname = this.clname;
      this.phone = this.cphone
      this.email = this.cemail ;
      this.address = this.caddress;
      this.desc = this.cdesc;
    }
    if (this.router.url.includes('experts-profile')) {
      this.name = this.ename;
      this.lname = this.elname;
      this.phone = this.ephone
      this.email = this.eemail ;
      this.address = this.eaddress;
      this.desc = this.edesc;
    }
  }

  // getUserInfo() {
  //   var inputs = {
  //     speciality: speciality,
  //     username: username,
  //     email: email,
  //     phone: phoneNumber,
  //     password: password,
  //     madarek: madarek,
  //   };
  //   this.userService.getUserInfo(inputs).subscribe((res) => {
  //     if (res.status == "200") {
  //       this.userInfo
  //     } else {
  //       this.invalidLogin = true;
  //     }
  //   });
  // }

}
