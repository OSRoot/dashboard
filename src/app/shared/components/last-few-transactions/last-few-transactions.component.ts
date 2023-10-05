import { Component } from '@angular/core';

@Component({
  selector: 'app-last-few-transactions',
  templateUrl: './last-few-transactions.component.html',
  styleUrls: ['./last-few-transactions.component.scss']
})
export class LastFewTransactionsComponent {


  transactions:any[]=[
    {
      id:1,
      title:'Ryzen 5 Processor',
      price:'$299',
      shop:'Electronics Pro',
      location:'Egypt, Cairo',
      status:'pending',
      img:'../../assets/ryzen5.jpg'
    },
    {
      id:2,
      title:'Ryzen 9 Processor',
      price:'$299',
      shop:'Electronics Pro',
      location:'Egypt, Mansoura',
      status:'shipped',
      img:'../../assets/ryzen5.jpg'
    },
    {
      id:3,
      title:'Ryzen 7 Processor',
      price:'$299',
      shop:'Electronics Pro',
      location:'Egypt, Alex',
      status:'confirmed',
      img:'../../assets/ryzen5.jpg'
    },
  ]
}
