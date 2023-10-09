import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import {  faHome, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { HelpersService } from 'src/app/core/services/helpers/helpers.service';
import Swiper from 'swiper';

@Component({
  selector: 'app-shops',
  templateUrl: './shops.component.html',
  styleUrls: ['./shops.component.scss']
})
export class ShopsComponent implements OnInit {
  @ViewChild('shops',{ static: false })shops:ElementRef|undefined;
  @ViewChild('Warehouse',{ static: false })Warehouse:ElementRef|undefined;
  @ViewChild('Garage',{ static: false })Garage:ElementRef|undefined;

  swiper?:Swiper;
  faLocation = faLocationDot;
  faHome = faHome
  isLoading:boolean = true

  constructor(
    private helper:HelpersService
  ){}

  ngOnInit(): void {
      setTimeout(() => {
        this.isLoading= false
      }, 1000);
  }
    /////////////////////////////////////////////////////////
    swiperReady(){
      this.swiper = this.shops?.nativeElement.swiper;
    }
    /////////////////////////////////////////////////////////

    goNext(val:string){
      if(val==='shops'){
          this.shops?.nativeElement.swiper.slideNext(500);
      }
      else if(val ==='warehouse'){
        this.Warehouse?.nativeElement.swiper.slideNext(500);
      }
      else{
        this.Garage?.nativeElement.swiper.slideNext(500);

      }
    };
    /////////////////////////////////////////////////////////
    goBack(val:string){
      if(val==='shops'){
        this.shops?.nativeElement.swiper.slidePrev(500);
      }
      else if (val ==='warehouse'){
        this.Warehouse?.nativeElement.swiper.slidePrev(500);
      }
      else{
        this.Garage?.nativeElement.swiper.slidePrev(500);
      }
    };
    /////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////
    swiperSlideChanged(ev:any){
      console.log(ev);
    }

    /////////////////////////////////////////////////////////
    navigate(page: string, dir: string, optional?: any) {
      this.helper.navigate(page, dir, optional);
    }

  }
