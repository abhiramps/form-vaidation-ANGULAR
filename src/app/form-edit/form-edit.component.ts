import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.component.html',
  styleUrls: ['./form-edit.component.css']
})
export class FormEditComponent implements OnInit {

  public FormEdit = this.fb.group({
    name: [""],
    phone: [""],
    email: [""],
    password: [""],
    message: [""],
  })
  public userId=""
  constructor(private fb: FormBuilder, private formservice: FormServiceService, route: ActivatedRoute) {
    route.paramMap.subscribe((param: any) => {
      
      this.userId = param.params.id;
      console.log(param.params.id)
      formservice.formEdit(this.userId)
        .subscribe((data: any) => {
          console.log(data)
          this.FormEdit.patchValue({
            name: data.name,
            phone: data.phone,
            email: data.email,
            password: data.password,
            message: data.message,
          })
        })
    })
  }


  ngOnInit(): void {
  }

  public update = () => {
    var name= this.FormEdit.value.name;
    var phone= this.FormEdit.value.phone;
    var email= this.FormEdit.value.email;
    var password= this.FormEdit.value.password;
    var message= this.FormEdit.value.message;
    this.formservice.updateForm(name,phone,email,password,message,this.userId)
    .subscribe((data:any)=>{
      alert(data.message)
    }) 

  }

}
