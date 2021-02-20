import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss'],
})
export class TicketComponent implements OnInit {
  pageMode = "user";

  constructor(private router: Router) { }

  ngOnInit() {
    if (this.router.url.includes('user')) {
      this.pageMode = "user";
    }
    if (this.router.url.includes('expert')) {
      this.pageMode = "expert";
    }
  }

  startChat() {
    if (this.pageMode == "user")
      this.router.navigate(['../chat'], { queryParams: { name: 'محمد رضایی',desc:'وکیل پایه یک دادگستری' } });
    else {
      this.router.navigate(['../chat'], { queryParams: { name: 'زهرا خیری',desc:'' } });
    }
  }

  displayedColumns: string[] = ['enter', 'lawername', 'date', 'time', 'select'];
  dataSource = [
    { date: '1400/01/01', time: '8:00', lawername: 'محمد امینی' },
    { date: '1400/02/02', time: '8:00', lawername: 'محمد امینی' },
    { date: '1400/02/02', time: '8:30', lawername: 'محمد امینی' },
    { date: '1400/02/02', time: '9:00', lawername: 'محمد امینی' },
  ];
}
