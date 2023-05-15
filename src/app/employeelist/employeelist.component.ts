import { Component,OnInit } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employeelist',
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
   employees:any
   constructor(private service:EmployeeService,private router:Router){

   }
   ngOnInit(): void {
     this.service.getAllEmployees().then(res=>res.json()).then(data=>this.employees=data)
   }
   redirecttoemployeedetail(id:any){
     this.router.navigateByUrl(`employee/${id}`)
   }
   removeemployee(id:any){
    this.service.employeeremove(id).then(res=>this.ngOnInit());
   }
}
