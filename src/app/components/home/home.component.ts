import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  itemsPerSlideTopUser = 4;
  topUserSlides = [
    {
      name: 'محمد مهدی رضاییان',
      desc: 'وکیل پایه یک دادگستری',
      score: 4,
      img: '../../../assets/image/lawer2.jpg',
    },
    {
      name: 'محمد رضایی',
      desc: 'وکیل پایه یک دادگستری',
      score: 4,
      img: '../../../assets/image/lawer3.jpg',
    },
    {
      name: 'رضا احمدی',
      desc: 'وکیل پایه یک دادگستری',
      score: 4,
      img: '../../../assets/image/lawer4.jpg',
    },
    {
      name: 'زاهد خانتیموری',
      desc: 'وکیل پایه یک دادگستری',
      score: 4,
      img: '../../../assets/image/lawer9.jpg',
    },
    {
      name: 'رضا احمدی',
      desc: 'وکیل پایه یک دادگستری',
      score: 4,
      img: '../../../assets/image/lawer5.jpg',
    },
    {
      name: 'جواد رضایی',
      desc: 'وکیل پایه یک دادگستری',
      score: 4,
      img: '../../../assets/image/lawer6.jpg',
    },
    {
      name: 'احمد احمدی',
      desc: 'وکیل پایه یک دادگستری',
      score: 4,
      img: '../../../assets/image/lawer7.jpg',
    },
    {
      name: 'مریم طالبی',
      desc: 'وکیل پایه یک دادگستری',
      score: 4,
      img: '../../../assets/image/lawer8.jpg',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}

  startReserve() {
    if (localStorage.getItem('token')) {
      this.router.navigate(['../reserve']);
    } else {
      this.router.navigate(['../login/client']);
    }
  }

  categorySelect(category:any){
    this.router.navigate(['../search'], { queryParams:{ name: category }});
  }

  categoryList = [
    { name: 'ملکی', image: '../../../assets/image/estate.jpg' },
    { name: 'خانواده', image: '../../../assets/image/family.jpg' },
    { name: 'کیفری', image: '../../../assets/image/crime.jpg' },
    { name: 'مالی', image: '../../../assets/image/financial.jpg' },
    { name: 'بیمه', image: '../../../assets/image/insurance.jpg' },
    { name: 'جرائم اینترنتی', image: '../../../assets/image/internet-law.jpg' },
  ];
}
