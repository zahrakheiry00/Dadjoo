
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ReserveComponent } from './reserve.component';
import { ReserveRoutingModule } from './reserve.routing';
import { MenuModule } from "../menu/menu.module";
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    ReserveComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ReserveRoutingModule,
    MenuModule,
    CarouselModule.forRoot()
  ],
  entryComponents: [

  ],
  exports: [ReserveComponent],
  providers: [],
})
export class ReserveModule {}
