import { Component,OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { EmployeeService } from '../services/employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-emtcreate',
  templateUrl: './emtcreate.component.html',
  styleUrls: ['./emtcreate.component.css']
})
export class EmtcreateComponent {
  empForm=new FormGroup({
    name:new FormControl("",Validators.required),
    email:new FormControl("",Validators.required),
    department:new FormControl("",Validators.required),
    phone:new FormControl(),
    salary:new FormControl()



  }

)
get name(){
  return this.empForm.get("name")
}
get email(){
return this.empForm.get("email")
}
get department(){
  return this.empForm.get("department")
}
get phone(){
return this.empForm.get("mobile")
}
get salary(){
  return this.empForm.get("salary")
  }


  constructor(private service:EmployeeService,private router:Router){}
  ngOnInit():void{

  }
 saveEmp(){
  console.log(this.empForm.value);
  let data=this.empForm.value
  this.service.employeeCreate(data).then(res=>res.json()).then(data=>this.router.navigateByUrl("index"))
  
 }
}
