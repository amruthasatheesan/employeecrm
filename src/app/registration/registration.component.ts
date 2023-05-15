import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
    RegForm=new FormGroup({
      username:new FormControl("",Validators.required),
      email:new FormControl("",Validators.required),
      password:new FormControl("",[Validators.required,Validators.email])
  }
  )
get username(){
    return this.RegForm.get("username")
}
get password(){
  return this.RegForm.get("password")
}
get email(){
  return this.RegForm.get("email")
}
constructor(private router:Router){

}
   signup(){
    console.log(this.RegForm.value);     //api call to create account
    this.router.navigateByUrl("")
   }
}
