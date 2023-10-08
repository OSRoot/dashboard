import { Component, OnInit } from '@angular/core';
import { HelpersService } from 'src/app/core/services/helpers/helpers.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit{
  isLoading:boolean = true
  constructor(
    private helper:HelpersService
  ){}

  ngOnInit(): void {
    setTimeout(() => {
      this.isLoading=false
    }, 1000);
  }

  navigate(page: string, dir: string, optional?: any) {
    this.helper.navigate(page, dir, optional);
  }
}
