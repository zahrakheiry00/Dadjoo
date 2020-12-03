
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login.component';
import { RouterModule } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { LoginRoutingModule } from './login.routing';


@NgModule({
  declarations: [
    LoginComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    LoginRoutingModule
  ],
  entryComponents: [

  ],
  exports: [LoginComponent],
  providers: [UserService],
})
export class LoginModule {}
