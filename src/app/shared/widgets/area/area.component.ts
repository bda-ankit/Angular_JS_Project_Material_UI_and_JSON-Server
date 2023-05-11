import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { EmployeesService } from 'src/app/shared/employees.service';

@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit{

constructor(private _service: EmployeesService){}

chartdata:any;

  chartOptions!: {};
  Highcharts = Highcharts;

  ngOnInit() {
    
    let maleCount = 0, femaleCount = 0, othersCount =0;
    this._service.getEmployeeList().subscribe(result => {
        this.chartdata = result;
            for(let i=0; i<=this.chartdata.length; i++){
                if(this.chartdata[i].gender == "Male" || this.chartdata[i].gender == "male"){
                    maleCount++;
                }
                else if(this.chartdata[i].gender == "Female" || this.chartdata[i].gender == "female"){
                    femaleCount++;
                }
                else if(this.chartdata[i].gender == "others" || this.chartdata[i].gender == "Others"){
                    othersCount++;
                }
            this.RenderChart(maleCount,femaleCount,othersCount);
            
        } 
        
    });
}

RenderChart(maleCount:any, femaleCount:any, othersCount:any){

    this.chartOptions = {
        chart: {
          plotBackgroundColor: null,
          plotBorderWidth: null,
          plotShadow: false,
          type: 'pie'
      },
      title: {
          text: 'Employee Pie Chart Gender Wise',
          align: 'left'
      },

      plotOptions: {
          pie: {
              allowPointSelect: false,
              cursor: 'pointer',
              dataLabels: {
                  enabled: true,
                  format: '<b>{point.name}</b>: {point.y}'
              }
          }
      },
      series: [{
          name: 'Gender',
          colorByPoint: true,
          data: [{
              name: 'Male',
              y: maleCount,
              sliced: true,
              selected: true
          }, {
              name: 'Female',
              y: femaleCount
          },  {
              name: 'others',
              y: othersCount
          }]
      }]
          
    }
  }
}

