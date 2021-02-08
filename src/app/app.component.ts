import { Component } from '@angular/core';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dadjoo';

  constructor(private matIconRegistry: MatIconRegistry,
    private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIcon("profile", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/profile.svg"));
    this.matIconRegistry.addSvgIcon("courthouse", this.domSanitizer.bypassSecurityTrustResourceUrl("../assets/svg/courthouse.svg"));
  }

}
