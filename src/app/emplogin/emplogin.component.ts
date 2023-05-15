import { Component } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms'
import {Router} from '@angular/router'

@Component({
  selector: 'app-emplogin',
  templateUrl: './emplogin.component.html',
  styleUrls: ['./emplogin.component.css']
})
export class EmploginComponent {
  LoginForm=new FormGroup({
    username:new FormControl("",Validators.required),
    password:new FormControl("",Validators.required)
}
)
get username(){
  return this.LoginForm.get("username")
}
get password(){
return this.LoginForm.get("password")
}

constructor(private router :Router){

}
authenticate(){
  console.log(this.LoginForm.value);
  this.router.navigateByUrl("index")
  
 }
}
