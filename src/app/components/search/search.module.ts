
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { SearchComponent } from './search.component';
import { SearchRoutingModule } from './search.routing';
import { MenuModule } from "../menu/menu.module";
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    SearchComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    SearchRoutingModule,
    MenuModule,
    CarouselModule.forRoot()
  ],
  entryComponents: [

  ],
  exports: [SearchComponent],
  providers: [],
})
export class SearchModule {}
