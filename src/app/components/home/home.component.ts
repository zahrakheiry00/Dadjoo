import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itemsPerSlideTopUser = 4;
  topUserSlides = [
    {name:"محمد مهدی رضاییان",desc:"وکیل پایه یک دادگستری",score:4},
    {name:"محمد مهدی رضاییان",desc:"وکیل پایه یک دادگستری",score:4},
    {name:"محمد مهدی رضاییان",desc:"وکیل پایه یک دادگستری",score:4},
    {name:"محمد مهدی رضاییان",desc:"وکیل پایه یک دادگستری",score:4},
    {name:"محمد مهدی رضاییان",desc:"وکیل پایه یک دادگستری",score:4},
    {name:"محمد مهدی رضاییان",desc:"وکیل پایه یک دادگستری",score:4},
    {name:"محمد مهدی رضاییان",desc:"وکیل پایه یک دادگستری",score:4},
    {name:"محمد مهدی رضاییان",desc:"وکیل پایه یک دادگستری",score:4},
  ];

  constructor(private router: Router) { }

  ngOnInit() {

  }

  startReserve(category:any){
    if(localStorage.getItem('token')){

    }
    else{
      this.router.navigate(['../login']);
    }
  }

  categoryList = [
    {name: "ملکی",image:"../../../assets/image/estate.jpg"},
    {name: "خانواده",image:"../../../assets/image/family.jpg"},
    {name: "کیفری",image:"../../../assets/image/crime.jpg"},
    {name: "مالی",image:"../../../assets/image/financial.jpg"},
    // {name: "شرکت ها",image:"../../../assets/image/company.jpg"},
    // {name: "جرائم اینترنتی",image:"../../../assets/image/internet-law.jpg"},
  ]

}
