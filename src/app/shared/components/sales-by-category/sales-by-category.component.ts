import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
import { color } from 'highcharts';

@Component({
  selector: 'app-sales-by-category',
  templateUrl: './sales-by-category.component.html',
  styleUrls: ['./sales-by-category.component.scss']
})
export class SalesByCategoryComponent {
  chart=new Chart({
    chart:{
      type:'pie',
      height:325
    },
    title:{
      text:'Category Wise Sales'
    },
    xAxis:{
      categories:[
        'Electronics',
        'Groceries',
        'Cosmetic',
        'Clothes',
        'Appliance',
      ]
    },
    yAxis:{
      title:{
        text:'Revenue in %'
      }
    },
    series:[
      {
        type:'pie',
        data:[
          {
            name:'Electronics',
            y:41.0,
            color:'#044342'
          },
          {
            name:'Groceries',
            y:90.0,
            color:'rgb(126, 5, 5)'
          },
          {
            name:'Cosmetic',
            y:10.0,
            color:'#ed9e20'
          },
          {
            name:'Clothes',
            y:15.0,
            color:'#6920fb'
          },
          {
            name:'Appliance',
            y:3.5,
            color:'#121212'
          },
        ]
      }
    ],
    credits:{
      enabled:false
    }
  })
}
