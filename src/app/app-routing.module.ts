import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { EmtcreateComponent } from './emtcreate/emtcreate.component';
import { EmploginComponent } from './emplogin/emplogin.component';
import { HomeComponent } from './home/home.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmployeeeditComponent } from './employeeedit/employeeedit.component';

const routes: Routes = [
  {path:"register",component:RegistrationComponent},
  {path:"index",component:HomeComponent},
  {path:"employee/add",component:EmtcreateComponent},
  {path:"employee/:id",component:EmpdetailComponent},
  {path:"employee-edit/:id",component:EmployeeeditComponent},
  {path:"",component:EmploginComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
