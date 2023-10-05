import { Component } from '@angular/core';
import { Chart } from 'angular-highcharts';
@Component({
  selector: 'app-sales-by-month',
  templateUrl: './sales-by-month.component.html',
  styleUrls: ['./sales-by-month.component.scss']
})
export class SalesByMonthComponent {
  chart=new Chart({
    chart:{
      type:'line',
      height:325
    },
    title:{
      text:'Month Wise Sales'
    },
    xAxis:{
      categories:[
        'Jan',
        'Feb',
        'Mar',
        'Apr',
        'May',
        'Jun',
        'Aug',
        'Sep',
        'Oct',
        'Nov',
        'Dec'
      ]
    },
    yAxis:{
      title:{
        text:'Revenue in $'
      }
    },
    series:[
      {
        name:'Arizona',
        type:'line',
        color:'#044342',
        data:[50,90,100,150,200,234,290,300,200,220]
      },
      {
        name:'Egypt',
        type:'line',
        color:'#7e0505',
        data:[50,30,70,100,109,200,290,210,200,230]
      },
      {
        name:'UAE',
        type:'line',
        color:'#ed9e20',
        data:[50,30,90,120,200,294,220,150,200,210]
      },
    ],
    credits:{
      enabled:false
    }
  })




  
constructor(){}
}
