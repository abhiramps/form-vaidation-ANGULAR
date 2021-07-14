import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private http: HttpClient) { }

  public Details: any = []
  // public details:{ name: string, phone: number, email: string,password:string, message: string }[]=[]
  // data=(Name:string,Phone:number,Email:string,Password:string,Message:string)=>{
  //   this.details.push({ name: Name, phone: Phone, email: Email,password:Password, message: Message })
  // }
  // public data = (Name: string, Phone: number, Email: string, Password: string, Message: string) => {}
  public formData = (Name: string, Phone: number, Email: string, Password: string, Message: string) => {
    return this.http.post("http://localhost:3000/forms", {
      "Name": Name,
      "Phone": Phone,
      "Email": Email,
      "Password": Password,
      "Message": Message
    })
      // .subscribe((data: any) => {
      //   console.log(data.message);
      //   // console.log(data.details[Name]);
      //   this.Details.push({
      //     name: data.details.name,
      //     phone: data.details.phone,
      //     email: data.details.email,
      //     password: data.details.password,
      //     message: data.details.message
      //   });
      // });
  }

  public getData=()=>{
    return this.http.get("http://localhost:3000/data")   //get req for geting entire form details
  }

  public formEdit=(_id:string)=>{
    return this.http.get("http://localhost:3000/data/"+_id)
  }

  public updateForm=(name:string,phone:number,email:string,password:string,message:string,_id:string)=>{
    return this.http.patch("http://localhost:3000/data/"+_id,{
      "name":name,
      "phone":phone,
      "email":email,
      "password":password,
      "message":message
    })
  }
  
  public deleteItem=(id:string)=>{
    return this.http.delete("http://localhost:3000/data/"+id)
  }
}
