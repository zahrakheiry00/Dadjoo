import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  users = [
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

}
