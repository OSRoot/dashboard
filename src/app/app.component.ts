import { Component } from '@angular/core';
import { SeoService } from './core/services/seo/seo.service';
// import { slideInAnimation } from './core/scripts/animation';
// import { ChildrenOutletContexts, RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'dashboard';
  constructor(
    // private contexts: ChildrenOutletContexts,
    private  seo:SeoService
  ){
    this.seo.initDefaultMetaInformation()
  }
  // getRouteAnimationData() {
  //   return this.contexts.getContext('primary')?.route?.snapshot?.data?.['animation'];
  // }

}
