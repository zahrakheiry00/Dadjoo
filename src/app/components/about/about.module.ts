import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuModule } from '../menu/menu.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { AboutComponent } from './about.component';

@NgModule({
  declarations: [AboutComponent],
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
  exports: [AboutComponent],
  providers: [],
})
export class AboutModule {}
