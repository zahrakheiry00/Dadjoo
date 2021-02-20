import { CommonModule } from '@angular/common';
import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MaterialModule } from 'src/app/shared/material.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        CommonModule,
        MaterialModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule,
        LoginRoutingModule,

        HttpClientTestingModule,
        RouterTestingModule,
        BrowserAnimationsModule,
      ],
      providers: [UserService],
    }).compileComponents();
  });

  it('test userService', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const loginComponent = fixture.componentInstance;
    expect(loginComponent).toBeTruthy(); //does it exist

    const userService = TestBed.inject(UserService);
    const httpTestingController = TestBed.inject(HttpTestingController);

    var inputs = {
      password: 123,
      username: 'admin',
    };
    userService.login(inputs).subscribe((data) => {
      //login service test
      expect(data.status).toEqual(-1);
    });
    const req = httpTestingController.expectOne(
      'http://127.0.0.1:5000/api/dadjoo_login'
    );
    expect(req.request.method).toBe('POST'); //call as post if get error
    req.flush({
      status: -1,
    });
  });

  it('test loginClicked', () => {
    const fixture = TestBed.createComponent(LoginComponent);
    const loginComponent = fixture.componentInstance;
    const userService = TestBed.inject(UserService);

    const data = {
      status: -1,
    };
    const mySpy = spyOn(userService, 'login').and.returnValue(of(data));
    loginComponent.loginClicked('zahra', 123);
    expect(mySpy).toHaveBeenCalledTimes(1); //called once
    fixture.detectChanges();
  });
});
