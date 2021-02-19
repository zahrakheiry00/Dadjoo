import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../menu/menu.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { ContactUsComponent } from './contact-us.component';

@NgModule({
  declarations: [ContactUsComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MenuModule,
    CarouselModule.forRoot(),
  ],
  entryComponents: [],
  exports: [ContactUsComponent],
  providers: [],
})
export class ContactUsModule {}
