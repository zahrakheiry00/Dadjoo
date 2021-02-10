import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userLinks = [
    { name: 'اطلاعات کاربر' },
    { name: 'لیست رزرو' },
    { name: 'تاریخچه' }
  ];
  expertLinks = [
    { name: 'اطلاعات کاربر' },
    { name: 'وقت آزاد' },
    { name: 'لیست رزرو' },
    { name: 'تاریخچه' }
  ];
  links:any = [];
  selectedLink = 'اطلاعات کاربر';
  pageMode = 'user';

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url.includes('user')) {
      this.pageMode = 'user';
      this.links = this.userLinks;
    }
    if (this.router.url.includes('expert')) {
      this.pageMode = 'expert';
      this.links = this.expertLinks;
    }
  }

  menuOnSelect(selected: any) {
    this.selectedLink = selected;
  }

}
