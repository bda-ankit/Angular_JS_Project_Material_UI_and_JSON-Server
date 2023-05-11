import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './layouts/default/default.component';
import { DashboardComponent } from './modules/dashboard/dashboard.component';
import { EmpAddEditComponent } from './modules/emp-add-edit/emp-add-edit.component';
import { CoronaComponent } from './modules/corona/corona.component';

const routes: Routes = [{
  
  path: '',
  component: DefaultComponent,
  children: [{
    path: 'admin/dashboard',
    component: DashboardComponent
  },
  {
    path: '',
    component: EmpAddEditComponent,
    
  },
  {
    path: 'admin/corona',
    component: CoronaComponent,
  }
  ]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
