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
  @ViewChild('swiper',{ static: false })
  swiperRef:ElementRef|undefined;
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
      this.swiper = this.swiperRef?.nativeElement.swiper;
    }
    /////////////////////////////////////////////////////////

    goNext(){
    this.swiperRef?.nativeElement.swiper.slideNext(500);
    };
    /////////////////////////////////////////////////////////
    goBack(){
      this.swiperRef?.nativeElement.swiper.slidePrev(500);

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
