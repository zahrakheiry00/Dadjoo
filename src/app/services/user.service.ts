import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable()
export class UserService {
  public fileList:any=[];
  public fileTrigger$: BehaviorSubject<any[]>;
  baseurl = 'http://127.0.0.1:5000/';

  constructor(private http: HttpClient, private router: Router) {
    this.fileTrigger$ = new BehaviorSubject<any[]>([]);
  }

  public get fileTrigger(): Observable<any[]> {
    return this.fileTrigger$.asObservable();
  }

  login(inputs: any): Observable<any> {
    const Url = this.baseurl + 'api/dadjoo_login';
    const hdrs = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(Url, inputs, { headers: hdrs });
  }

  registerClient(inputs: any): Observable<any>  {
    const Url = this.baseurl + 'api/dadjoo_reg_client';
    const hdrs = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(Url, inputs, { headers: hdrs });
  }

  registerExpert(inputs: any): Observable<any>  {
    const Url = this.baseurl + 'api/dadjoo_reg_expert';
    const hdrs = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(Url, inputs, { headers: hdrs });
  }

  search(inputs: any): Observable<any>  {
    const Url = this.baseurl + 'api/dadjoo_search_expert';
    const hdrs = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(Url, inputs, { headers: hdrs });
  }

  getUserInfo(inputs: any): Observable<any>  {
    const Url = this.baseurl + 'api/dadjoo_get_client_info';
    const hdrs = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(Url, inputs, { headers: hdrs });
  }

  getFile(inputs: any): Observable<any>  {
    const Url = this.baseurl + 'api/dadjoo_get_file';
    const hdrs = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(Url, inputs, { headers: hdrs });
  }

}
