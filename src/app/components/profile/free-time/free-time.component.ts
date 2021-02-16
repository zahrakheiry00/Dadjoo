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

  displayedColumns: string[] = ['delet', 'date', 'time', 'select'];
  dataSource = [
    {date: '1400/01/01', time: '8:00', },
    {date: '1400/02/02', time: '8:00', },
    {date: '1400/02/02', time: '8:30', },
    {date: '1400/02/02', time: '9:00', },
  ];


}
