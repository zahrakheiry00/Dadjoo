import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  users = [
    {
      name: 'محمد مهدی رضاییان',
      desc: 'وکیل پایه یک دادگستری',
      score: 4,
      img: '../../../assets/image/lawer2.jpg',
    },
    {
      name: 'محمد مهدی رضاییان',
      desc: 'وکیل پایه یک دادگستری',
      score: 4,
      img: '../../../assets/image/lawer3.jpg',
    },
    {
      name: 'محمد مهدی رضاییان',
      desc: 'وکیل پایه یک دادگستری',
      score: 4,
      img: '../../../assets/image/lawer4.jpg',
    },
    {
      name: 'محمد مهدی رضاییان',
      desc: 'وکیل پایه یک دادگستری',
      score: 4,
      img: '../../../assets/image/lawer9.jpg',
    },
    {
      name: 'محمد مهدی رضاییان',
      desc: 'وکیل پایه یک دادگستری',
      score: 4,
      img: '../../../assets/image/lawer5.jpg',
    },
    {
      name: 'محمد مهدی رضاییان',
      desc: 'وکیل پایه یک دادگستری',
      score: 4,
      img: '../../../assets/image/lawer6.jpg',
    },
    {
      name: 'محمد مهدی رضاییان',
      desc: 'وکیل پایه یک دادگستری',
      score: 4,
      img: '../../../assets/image/lawer7.jpg',
    },
    {
      name: 'محمد مهدی رضاییان',
      desc: 'وکیل پایه یک دادگستری',
      score: 4,
      img: '../../../assets/image/lawer8.jpg',
    },
  ];

  constructor(private router: Router) {}

  ngOnInit() {}
}
