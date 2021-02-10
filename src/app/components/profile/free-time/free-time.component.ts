import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-free-time',
  templateUrl: './free-time.component.html',
  styleUrls: ['./free-time.component.scss']
})
export class FreeTimeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

}
