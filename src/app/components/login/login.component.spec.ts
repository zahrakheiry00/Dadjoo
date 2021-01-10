import { CommonModule } from '@angular/common';
import { getTestBed, inject, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MaterialModule } from 'src/app/shared/material.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';


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
      ],
      providers: [UserService],
    }).compileComponents();

  });

});
