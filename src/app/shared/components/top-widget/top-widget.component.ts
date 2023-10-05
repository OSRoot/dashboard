import { Component } from '@angular/core';
import { faBoxes, faLocation, faMoneyBill, faShop } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-top-widget',
  templateUrl: './top-widget.component.html',
  styleUrls: ['./top-widget.component.scss']
})
export class TopWidgetComponent {
  faLocation=faLocation;
  faShop=faShop;
  faBoxes=faBoxes;
  faMoneyBill=faMoneyBill;


}
