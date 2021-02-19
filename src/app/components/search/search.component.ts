import { Component, OnInit } from '@angular/core';
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

  constructor(private userService: UserService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params.name == 'ملکی')
        this.specialtyid = 1;
    });
  }

  search() {
    var inputs = {
      expertname: this.searchText,
      specialtyid: this.specialtyid
    };
    this.userService.search({ intext: JSON.stringify(inputs) }).subscribe(res => {

    })
  }

}
