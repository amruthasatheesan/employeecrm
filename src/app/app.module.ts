import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmtcreateComponent } from './emtcreate/emtcreate.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EmploginComponent } from './emplogin/emplogin.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
import { EmpdetailComponent } from './empdetail/empdetail.component';
import { EmployeeeditComponent } from './employeeedit/employeeedit.component';

@NgModule({
  declarations: [
    AppComponent,
    EmtcreateComponent,
    EmploginComponent,
    RegistrationComponent,
    HomeComponent,
    EmployeelistComponent,
    EmpdetailComponent,
    EmployeeeditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
