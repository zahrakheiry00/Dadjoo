import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-reserve',
  templateUrl: './reserve.component.html',
  styleUrls: ['./reserve.component.scss']
})
export class ReserveComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {

  }

  displayedColumns: string[] = ['date', 'time', 'select'];
  dataSource = [
    {date: '1400/01/01', time: '8:00', },
    {date: '1400/02/02', time: '8:00', },
    {date: '1400/02/02', time: '8:30', },
    {date: '1400/02/02', time: '9:00', },
  ];

  accept(){
    this.router.navigate(['../users-profile']);
  }

}
