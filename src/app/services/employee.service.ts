import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }
  getAllEmployees(){
    return fetch("http://127.0.0.1:8000/api/employees/")

  }
  getEmployeeDetail(id:any){
    return fetch(`http://127.0.0.1:8000/api/employees/${id}/`)
  }
  employeeCreate(data:any){
      let options={
        "method":"post",
        "body":JSON.stringify(data),
        "headers":{
          "Content-type":"application/json; Charset=UTF-8"
        }
      }
     return fetch("http://127.0.0.1:8000/api/employees/",options)
  }

  employeeremove(id:any){
    let options={
      "method":"delete",
      "headers":{
        "Content-type":"application/json; Charset=UTF-8"
      }
    }
    return fetch(`http://127.0.0.1:8000/api/employees/${id}/`,options)

  }
  employeeUpdate(id:any,data:any){
    let options={
      "method":"put",
      "body":JSON.stringify(data),
      "headers":{
        "Content-type":"application/json; Charset=UTF-8"
      }
    }
   return fetch(`http://127.0.0.1:8000/api/employees/${id}/`,options)
}
}
