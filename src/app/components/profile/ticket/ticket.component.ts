import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  displayedColumns: string[] = ['enter', 'lawername', 'date', 'time', 'select'];
  dataSource = [
    { date: '1400/01/01', time: '8:00', lawername: 'محمد امینی' },
    { date: '1400/02/02', time: '8:00', lawername: 'محمد امینی' },
    { date: '1400/02/02', time: '8:30', lawername: 'محمد امینی' },
    { date: '1400/02/02', time: '9:00', lawername: 'محمد امینی' },
  ];
}
