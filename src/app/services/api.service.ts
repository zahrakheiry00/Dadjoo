import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  baseurl="http://127.0.0.1:5000/";

  post(url : string, object : Object) : Observable<any>{
    return this.http.post(this.baseurl + url, object);
  }
  
  get() : Observable<any>{ 
    return this.http.get(this.baseurl);
  }
  

}
