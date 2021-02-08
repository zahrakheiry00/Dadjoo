
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MaterialModule } from 'src/app/shared/material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { MenuComponent } from './menu.component';
import { MatIconModule } from "@angular/material/icon";


@NgModule({
  declarations: [
    MenuComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatIconModule,
  ],
  entryComponents: [

  ],
  exports: [MenuComponent],
  providers: [],
})
export class MenuModule {}
