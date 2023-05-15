import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from '@angular/forms';
import { ActivatedRoute,Router } from '@angular/router';
import { EmployeeService } from '../services/employee.service';


@Component({
  selector: 'app-employeeedit',
  templateUrl: './employeeedit.component.html',
  styleUrls: ['./employeeedit.component.css']
})
export class EmployeeeditComponent implements OnInit {
  id:any
  constructor(private route:ActivatedRoute,private service:EmployeeService, private router:Router){
   this.id=this.route.snapshot.params["id"]
   console.log(this.id);
   
  }
  ngOnInit():void{
    this.service.getEmployeeDetail(this.id).then(res=>res.json()).then(data=>this.updateform(data));
    
  }
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
 updateform(data:any){
  this.empForm.patchValue(data);

  // this.empForm.patchValue({           or we can enter data like this
  //   name:data.name,
  //   email:data.email,
  // })

 }
 
 editemployee(){
  let data=this.empForm.value
  this.service.employeeUpdate(this.id,data).then(res=>res.json()).then(data=>this.router.navigateByUrl("index"))
 }
}
