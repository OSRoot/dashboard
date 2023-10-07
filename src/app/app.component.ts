import { Component } from '@angular/core';
import { SeoService } from './core/services/seo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dashboard';
  constructor(
    private  seo:SeoService
  ){
    this.seo.initDefaultMetaInformation()
  }


}
