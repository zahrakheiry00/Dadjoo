
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile.component';
import { ProfileRoutingModule } from './profile.routing';
import { MenuModule } from "../menu/menu.module";
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { UserInfoComponent } from "./user-info/user-info.component";
import { FreeTimeComponent } from "./free-time/free-time.component";
import { TicketComponent } from "./ticket/ticket.component";
import { HistoryComponent } from "./history/history.component";


@NgModule({
  declarations: [
    ProfileComponent,
    UserInfoComponent,
    FreeTimeComponent,
    TicketComponent,
    HistoryComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ProfileRoutingModule,
    MenuModule,
    CarouselModule.forRoot()
  ],
  entryComponents: [

  ],
  exports: [ProfileComponent],
  providers: [],
})
export class ProfileModule {}
