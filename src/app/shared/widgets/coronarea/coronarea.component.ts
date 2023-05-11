import { Component,  OnInit} from '@angular/core';
import { EmployeesService } from 'src/app/shared/employees.service';
import{Chart, registerables} from 'node_modules/chart.js'
Chart.register(...registerables);
import * as Highcharts from 'highcharts';

@Component({
  selector: 'app-coronarea',
  templateUrl: './coronarea.component.html',
  styleUrls: ['./coronarea.component.scss']
})
export class CoronareaComponent  implements OnInit{
  

  constructor(private _service: EmployeesService){}

  chardata:any;
  labeldata:any[]=[];
  positive:any[]=[];
  negative:any[]=[];

  data:any[]=[];
  labelDataPublic:any[]=[];
  sessionData:any[]=[];

  chartOptions!: {};

  Highcharts = Highcharts;
  ngOnInit() :void{

    this._service.getUsCoronaList().subscribe(
      result => {
        this.chardata = result;
        if(this.chardata!=null){
          for(let i=0; i<40; i++){
            this.labeldata.push(this.chardata[i].date)
            this.positive.push(this.chardata[i].positive)
            this.negative.push(this.chardata[i].negative)
          }
        }
      }
    )
    

    this._service.getCoronaRecordPublic().subscribe(
      result => {
        this.data = result;
        if(this.data!=null){
          for(let i=0; i<this.data.length; i++){
            this.labelDataPublic.push(this.chardata[i].sessions.name)
            this.sessionData.push(this.chardata[i].sessions.center_id)

            
          }
        }
      }
    );

    this.RenderChart(this.labeldata,this.positive);
    this.RenderChartOne(this.labeldata,this.negative);
    this.RenderChartbyPublic(this.labelDataPublic,this.sessionData);
    console.log(this.labelDataPublic);
    console.log(this.sessionData);

  }

  RenderChart(labeldata:any, positive:any){
  new Chart('piechart', {
    type: 'bar',
    data: {
      labels: labeldata,
      datasets: [{
        label: '# of Positive Cases',
        data: positive,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  })
  }

  RenderChartOne(labeldata:any, negative:any){
  new Chart('piechart1', {
    type: 'bar',
    data: {
      labels: labeldata,
      datasets: [{
        label: '# of Negative Cases',
        data: negative,
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: false
        }
      }
    }
  })
}

  RenderChartbyPublic(labelDataPublic:any, sessionData:any){
    new Chart('piechart2', {
      type: 'bar',
      data: {
        labels: labelDataPublic,
        datasets: [{
          label: '# of Center ID',
          data: sessionData,
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          y: {
            beginAtZero: false
          }
        }
      }
    });

  
  }
}
