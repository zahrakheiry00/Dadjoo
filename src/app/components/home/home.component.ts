import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

  categoryList = [
    {name: "حضانت فرزند"},
    {name: "اجرت المثل"},
    {name: "طلاق"},
    {name: "طلاق توافقی"},
    {name: "جهیزیه"},
    {name: "نفقه"},
    {name: "مهریه"},
    // {name: "نحله"},
    // {name: "ملاقات فرزند"},
    // {name: "فسخ نکاح"},
    // {name: "سرقت"},
    // {name: "افترا"},
    // {name: "قتل"},
    // {name: "مواد مخدر"},
  ]

  consultantList = [
    {name:"محمد مهدی رضاییان",desc:"وکیل پایه یک دادگستری",score:4},
    {name:"محمد مهدی رضاییان",desc:"وکیل پایه یک دادگستری",score:4},
    {name:"محمد مهدی رضاییان",desc:"وکیل پایه یک دادگستری",score:4},
    {name:"محمد مهدی رضاییان",desc:"وکیل پایه یک دادگستری",score:4},
    {name:"محمد مهدی رضاییان",desc:"وکیل پایه یک دادگستری",score:4},
    {name:"محمد مهدی رضاییان",desc:"وکیل پایه یک دادگستری",score:4},
    {name:"محمد مهدی رضاییان",desc:"وکیل پایه یک دادگستری",score:4},
  ]
}
