import { Injectable } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class SeoService {

  constructor(
    private readonly meta:Meta,
    private readonly title:Title
  ) { }

  initDefaultMetaInformation(){
    this.title.setTitle('Osroot Dashboard');
    this.meta.addTags([
      {
        // this line tells the search engine bots to not index  the webapp
        // name:'robots', content:'noindex, follow'
        // this line tells the search engine bots to index  the webapp
        name:'robots', content:'allow:*'
      }
      ,
      {
        name:'description',
        content:'Amazing Dashboard made by OsamaEssayed (osroot)',
      },
      {
        name:'author', content:'Osama Essayed Ibrahim'
      },
      {
        name:'keywords', content:'OsamaEssayed Osroot Dashboard'
      }
    ])
  }
}
