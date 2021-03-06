import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ChatComponent } from './chat.component';
import { ChatRoutingModule } from './chat.routing';
import { MenuModule } from '../menu/menu.module';
import { CarouselModule } from 'ngx-bootstrap/carousel';
import { SocketIoModule } from 'ngx-socket-io';
import { FileUploadModule } from '../file-upload/file-upload.module';
import { UserService } from 'src/app/services/user.service';

@NgModule({
  declarations: [ChatComponent],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    ChatRoutingModule,
    MenuModule,
    CarouselModule.forRoot(),
    FileUploadModule,
    SocketIoModule.forRoot({ url: 'http://127.0.0.1:5000/', options: {} }),
    //SocketIoModule.forRoot({ url: 'http://192.168.43.120:5000', options: {} }),
  ],
  entryComponents: [],
  exports: [ChatComponent],
  providers: [UserService],
})
export class ChatModule {}
