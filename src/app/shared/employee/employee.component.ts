import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeesService } from '../employees.service';
import { MatDialog } from '@angular/material/dialog';
import { EmployeeAddEditComponent } from '../employee-add-edit/employee-add-edit.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { CoreService } from '../core.service';
import { ToastrsService } from '../toastrs.service'

@Component({
  selector: 'app-emp-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss']
})
export class EmployeeComponent implements OnInit {

  ngOnInit(): void {
    this.getEmployeeList();
  }
  constructor(private _empService: EmployeesService, private _dialog: MatDialog,
    private _coreService: CoreService,
    private notifyService : ToastrsService,){
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
    'id',
    'firstName',
    'lastName',
    'email',
    'dob',
    'gender',
    'education',
    'company',
    'experience',
    'package',
    'action',
  ];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  getEmployeeList() {
    this._empService.getEmployeeList().subscribe({
      next: (res) => {
        
        this.dataSource = new MatTableDataSource(res);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      },
      error: console.log,
    });
  }

  deleteEmployee(id: number) {
    this._empService.deleteEmployee(id).subscribe({
      next: (res) => {
        this._coreService.openSnackBar('Employee deleted!');
        this.notifyService.showDeleted("Employee deleted!","Success");
        this.getEmployeeList();
      },
      error: console.log,
    });
  }

  openEditForm(data: any) {
    const dialogRef = this._dialog.open(EmployeeAddEditComponent, {
      data,
    });

    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }

  openAddEditEmpForm() {
    const dialogRef = this._dialog.open(EmployeeAddEditComponent);
    dialogRef.afterClosed().subscribe({
      next: (val) => {
        if (val) {
          this.getEmployeeList();
        }
      },
    });
  }

}
