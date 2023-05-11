import { Component,OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit{

  @Input() label!: String;
  @Input() total!: String;
  @Input() percentage!: String;

  chartOptions = {};
  Highcharts = Highcharts;

  constructor(){}
  ngOnInit() {
      this.chartOptions = {
        chart: {
          type: 'area',
          backgroundColor: null,
          borderWidth: 0,
          margin:[2,2,2,2],
          height: 60
      },
      title: {
          text: null
      },
      subtitle: {
          text:null
      },
      tooltip: {
          split: true,
          valueSuffix: true
      },
      legend: {
        enabled: false
      },
      
      credits: {
        enabled: false
      },
      exporting:{
        enabled: false
      },
      xAxis:{
        lables:{
          enabled: false
        },
        title:{
          text: null
        },
        startOnTick: false, 
        endOnTick: false,
        tickOptions: []
      },
      yAxis:{
        lables:{
          enabled: false,
        },
        title:{
          text: null
        },
        startOnTick: false, 
        endOnTick: false,
        tickOptions: []
      },
      series: [{
          data: [12, 11, 19, 15]
      
      }]
    };
  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
    );
  }, 300);
      }
  }

