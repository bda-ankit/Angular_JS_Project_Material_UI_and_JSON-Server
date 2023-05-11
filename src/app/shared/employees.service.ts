
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeesService {

  constructor(private _http: HttpClient) { }

  getEmployeeList(): Observable<any> {
    return this._http.get('http://localhost:3000/employees');
  }

  deleteEmployee(id: number): Observable<any> {
    return this._http.delete(`http://localhost:3000/employees/${id}`);
  }

  updateEmployee(id: number, data: any): Observable<any> {
    return this._http.put(`http://localhost:3000/employees/${id}`, data);
  }
  addEmployee(data: any): Observable<any> {
    return this._http.post('http://localhost:3000/employees', data);
  } 

  getUsCoronaList(): Observable<any> {
    return this._http.get('https://api.covidtracking.com/v1/us/daily.json');
  }

  getCoronaRecordPublic(): Observable<any>{
    return this._http.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=512&date=31-03-2021');
  }
  
}
