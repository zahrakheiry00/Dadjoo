import { Injectable, ErrorHandler } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
  HttpErrorResponse,
} from '@angular/common/http';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from '../services/user.service';



@Injectable()
export class AuthGuard implements CanActivate, HttpInterceptor {

  constructor(private router: Router, public errorHandler: ErrorHandler,) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    throw new Error('Method not implemented.');
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    var user = localStorage.getItem('token');
    if (user != null) {
      return true;
    }
    this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
    return false;
  }

}
