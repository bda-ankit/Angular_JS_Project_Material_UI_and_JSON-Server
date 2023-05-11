import { Component, OnInit, ViewChild} from '@angular/core';
import { EmployeesService } from '../employees.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeAddEditComponent } from '../employee-add-edit/employee-add-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CoreService } from '../core.service';
import { ToastrsService } from '../toastrs.service'

@Component({
  selector: 'app-corona-details',
  templateUrl: './corona-details.component.html',
  styleUrls: ['./corona-details.component.scss']
})
export class CoronaDetailsComponent {

  ngOnInit(): void {
    this.getUsCoronaList();
  }

  constructor(private _empService: EmployeesService){
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  title(title: any) {
    throw new Error('Method not implemented.');
  }
  displayedColumns: string[] = [
    'date',
    'states',
    'positive',
    'negative',
    'pending',
    'hospitalizedCurrently',
    'hospitalizedCumulative',
    'inIcuCurrently',
    'inIcuCumulative',
    'onVentilatorCurrently',
    'onVentilatorCumulative',
    'dateChecked',
    'death',
    'hospitalized',
    'totalTestResults',
    'lastModified',
    'recovered',
    'total',
    'posNeg',
    'deathIncrease',
    'hospitalizedIncrease',
    'negativeIncrease',
    'positiveIncrease',
    'totalTestResultsIncrease',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  getUsCoronaList() {
    this._empService.getUsCoronaList().subscribe({
      next: (res) => {
        
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }
}
