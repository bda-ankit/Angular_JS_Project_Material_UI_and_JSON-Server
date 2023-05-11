import { Component, OnInit } from '@angular/core';
import * as Highcharts from 'highcharts';
import { EmployeesService } from 'src/app/shared/employees.service';

@Component({
  selector: 'app-bycompany',
  templateUrl: './bycompany.component.html',
  styleUrls: ['./bycompany.component.scss']
})
export class BycompanyComponent  implements OnInit {
  constructor(private _service: EmployeesService){}

  chartdata:any;
  
    chartOptions!: {};
    Highcharts = Highcharts;
  
    ngOnInit() {
      
      let GabspotCount = 0, MycatCount = 0, YouopiaCount =0;
      this._service.getEmployeeList().subscribe(result => {
          this.chartdata = result;
              for(let i=0; i<=this.chartdata.length; i++){
                  if(this.chartdata[i].company == "Gabspot"){
                    GabspotCount++;
                  }
                  else if(this.chartdata[i].company == "Mycat"){
                    MycatCount++;
                  }
                  else if(this.chartdata[i].company == "Youopia"){
                    YouopiaCount++;
                  }
          this.RenderChart(GabspotCount,MycatCount,YouopiaCount);
          } 
          
      });
  }
  
  RenderChart(GabspotCount:any, MycatCount:any, YouopiaCount:any){
  
      this.chartOptions = {
          chart: {
            plotBackgroundColor: null,
            plotBorderWidth: null,
            plotShadow: false,
            type: 'pie'
        },
        title: {
            text: 'Employee Pie Chart by Company name',
            align: 'left'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.y}'
                }
            }
        },
        series: [{
            name: 'Company',
            colorByPoint: true,
            data: [{
                name: 'Gabspot',
                y: GabspotCount,
                sliced: true,
                selected: true
            }, {
                name: 'Mycat',
                y: MycatCount
            },  {
                name: 'Youopia',
                y: YouopiaCount
            }]
        }]
            
      }
    }
}
