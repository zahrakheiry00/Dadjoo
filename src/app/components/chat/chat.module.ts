
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat.routing';
import { MenuModule } from "../menu/menu.module";
import { CarouselModule } from 'ngx-bootstrap/carousel';


@NgModule({
  declarations: [
    ChatComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ChatRoutingModule,
    MenuModule,
    CarouselModule.forRoot()
  ],
  entryComponents: [

  ],
  exports: [ChatComponent],
  providers: [],
})
export class ChatModule {}
