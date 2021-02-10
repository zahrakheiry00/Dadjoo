
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { FileUploadComponent } from './file-upload.component';
import { MatIconModule } from "@angular/material/icon";
import { NgxFileDropModule } from "ngx-file-drop";


@NgModule({
  declarations: [
    FileUploadComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
    NgxFileDropModule,
  ],
  entryComponents: [

  ],
  exports: [FileUploadComponent],
  providers: [],
})
export class FileUploadModule {}
