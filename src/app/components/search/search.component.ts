import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  searchText: any;
  specialtyid: any;
  image: any;
  users:any = [
    // {
    //   name: 'محمد رضایی',
    //   desc: 'وکیل پایه یک دادگستری',
    //   score: 4,
    //   img: '../../../assets/image/lawer2.jpg',
    // },
    // {
    //   name: 'مریم طالبی',
    //   desc: 'وکیل پایه یک دادگستری',
    //   score: 4,
    //   img: '../../../assets/image/lawer3.jpg',
    // },
    // {
    //   name: 'محسن خیری',
    //   desc: 'وکیل پایه یک دادگستری',
    //   score: 4,
    //   img: '../../../assets/image/lawer4.jpg',
    // },
    // {
    //   name: 'زهرا احمدی',
    //   desc: 'وکیل پایه یک دادگستری',
    //   score: 4,
    //   img: '../../../assets/image/lawer9.jpg',
    // },
    // {
    //   name: 'رضا احمدی',
    //   desc: 'وکیل پایه یک دادگستری',
    //   score: 4,
    //   img: '../../../assets/image/lawer5.jpg',
    // },
    // {
    //   name: 'شایان کیان',
    //   desc: 'وکیل پایه یک دادگستری',
    //   score: 4,
    //   img: '../../../assets/image/lawer6.jpg',
    // },
    // {
    //   name: 'زاهد خانتیموری',
    //   desc: 'وکیل پایه یک دادگستری',
    //   score: 4,
    //   img: '../../../assets/image/lawer7.jpg',
    // },
    // {
    //   name: 'محمد مهدی رضاییان',
    //   desc: 'وکیل پایه یک دادگستری',
    //   score: 4,
    //   img: '../../../assets/image/lawer8.jpg',
    // },
  ];

  constructor(private sanitizer: DomSanitizer, private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.name == 'ملکی')
        this.specialtyid = 3;
      if (params.name == 'خانواده')
        this.specialtyid = 2;
      if (params.name == 'کیفری')
        this.specialtyid = 1;
      if (params.name == 'مالی')
        this.specialtyid = 6;
      if (params.name == 'بیمه')
        this.specialtyid = 5;
      if (params.name == 'جرائم اینترنتی')
        this.specialtyid = 4;
    });
  }

  search() {
    var inputs = {
      expertname: this.searchText,
      specialtyid: this.specialtyid
    };
    this.userService.search({ intext: JSON.stringify(inputs) }).subscribe(res => {
      this.users = [];
      if (res.data) {
        res.data.forEach((element: any) => {
          element.img = this.sanitizer.bypassSecurityTrustResourceUrl('data:image/png;base64,' + element.img);
        });
        this.users = res.data;
      }
    })
  }

  startReserve() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['../reserve']);
    } else {
      this.router.navigate(['../login/client']);
    }
  }

}
