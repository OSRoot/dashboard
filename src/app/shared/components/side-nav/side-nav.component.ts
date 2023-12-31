import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faBox, faChartBar, faCoffee,faContactBook,faDashboard,faHand,faHome, faLocation, faMoneyBill, faShop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {

  faCoffee = faCoffee;
  faHome = faHome;
  faLocation=faLocation;
  faDashboard=faDashboard;
  faShop=faShop;
  faBox=faBox;
  faMoneyBill=faMoneyBill;
  faChartBar=faChartBar;
  faContactBook=faContactBook;
  faHand=faHand;

////////////////////////////////////////////////////////////////////////////
constructor(
  private router:Router
){}

    ///////////// Method to help Activate the Tab ////////////
    isActive(route:string):boolean{
      return this.router.isActive(route, false)
      }
}
