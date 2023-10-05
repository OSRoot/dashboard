import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';

@Component({
  selector: 'app-top-three-products',
  templateUrl: './top-three-products.component.html',
  styleUrls: ['./top-three-products.component.scss']
})
export class TopThreeProductsComponent {

chart = new Chart({
    chart:{
      type:'bar',
      height:225
    },
    title:{
      text:'Top 3 Products'
    },
    xAxis:{
      categories:[
        'Ryzen 5 Processor',
        'Potatoes with Ketcheb',
        'Black Shirt S7'
      ]
    },
    yAxis:{
      title:{
        text:''
      }
    },
    series:[
      {
        showInLegend:false,
        type:'bar',
        data:[
          {
            name:'Ryzen 5 Processor',
            y:41.0,
            color:'#044342'
          },
          {
            name:'Potatoes with Ketcheb',
            y:90.0,
            color:'rgb(126, 5, 5)'
          },
          {
            name:'Black Shirt S7',
            y:10.0,
            color:'#ed9e20'
          }
        ]
      }
    ],
    credits:{
      enabled:false
    }
  })
}
