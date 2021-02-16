import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegisterUsertModule } from './register-user.routing';
import { UserService } from 'src/app/services/user.service';
import { RegisterUserComponent } from './register-user.component';
@NgModule({
  declarations: [RegisterUserComponent],
  imports: [
    CommonModule,
    RegisterUsertModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [UserService],
})
export class RegisterUserModule {}
