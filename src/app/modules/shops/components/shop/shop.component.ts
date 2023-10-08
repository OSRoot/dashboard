import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/core/services/helpers/helpers.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit{
  isLoading:boolean = true;
  constructor(
    private helper:HelpersService
  ){}

  ngOnInit(): void {
      setTimeout(() => {
        this.isLoading = false;
      }, 1000);
  }

 /////////////////////////////////////////////////////////
 navigate(page: string, dir: string, optional?: any) {
  this.helper.navigate(page, dir, optional);
}

}
