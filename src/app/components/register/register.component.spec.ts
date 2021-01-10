import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { UserService } from 'src/app/services/user.service';
import { MaterialModule } from 'src/app/shared/material.module';
import { RegisterRoutingModule } from './register-routing.module';

import { RegisterComponent } from './register.component';

describe('RegisterComponent', () => {
  let component: RegisterComponent;
  let fixture: ComponentFixture<RegisterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule(
      {
        declarations: [RegisterComponent],
        imports: [
          CommonModule,
          RegisterRoutingModule,
          MaterialModule,
          FormsModule,
          ReactiveFormsModule,
          BrowserAnimationsModule,

          HttpClientTestingModule,
          RouterTestingModule,
        ],
        providers: [UserService],
      })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
