
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable()
export class UserService {
baseurl="http://127.0.0.1:5000/"
  constructor(private http: HttpClient,
    private router: Router, ) {

  }

  login(inputs:any){
    const Url = this.baseurl+'api/login';
    const hdrs = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(Url, inputs, { headers: hdrs });
  }


}
