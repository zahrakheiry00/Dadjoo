import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  texts = [
    {sender:true,text:'تست1'},
    {sender:false,text:'تست2'},
    {sender:true,text:' تست متن طولانی تست متن طولانی تست متن طولانی تست متن طولانی تست متن طولانی تست متن طولانی'},
  ]

  constructor(private router: Router) { }

  ngOnInit() {

  }

}
