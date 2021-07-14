
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators} from '@angular/forms';
import { Router } from '@angular/router';
// import { ValidatePassword } from '../must-match/validate-password';
import { FormServiceService } from '../services/form-service.service';


@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private router:Router,
    private fb: FormBuilder,
    private formService:FormServiceService
  ){}


  public Match_Password=false;
  public match="";

  Forms = this.fb.group({
    name: ["",[Validators.required,Validators.pattern('^[a-zA-Z]+$')]],
    phone: ["",[Validators.required,Validators.pattern('[0-9]{10}')]],
    email: ["",[Validators.required,Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
    message: ["",[Validators.required]],
    password: ["",[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
    confirmPass: ["",[Validators.required]],
    
    // {
    //   Validator: ValidatePassword.MatchPassword // your validation method
    // }
    // password: ["",[Validators.required,Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&].{8,}$')]],
    // confirmPass: ["", Validators.required],
  })

  // public details: { name: string, phone: number, email: string, message: string }[] = [];
  ngOnInit(): void {
  }

  onSubmit() {
    var Name = this.Forms.value.name;
    var Phone = this.Forms.value.phone;
    var Email = this.Forms.value.email;
    var Password=this.Forms.value.password;
    var ConfirmPassword=this.Forms.value.confirmPass;
    var Message = this.Forms.value.message;

    // var _id=""
    // alert(Password)
    // if(this.Forms.get('phone')?.errors?.pattern?.actualValue){
    //   alert("enter excat 10 digit number")
    // }
    // console.log(this.Forms.get('phone')?.errors?.pattern?.actualValue)
    if(Password==ConfirmPassword){
       this.Match_Password=true;
    }
    else{
      this.Match_Password=false;
    }
    // console.log(this.Forms.get('confirmPass'))

    if(this.Forms.valid==false){  //validation
      // console.log(this.Forms)
      // console.log( this.Forms.get('email')?.errors?.pattern?.actualValue)
      
      // console.log(this.Forms.get('phone')?.errors?.pattern?.requiredPattern)
     
      // if(this.Forms.get('name')?.errors?.actualValue<=6){
      //   alert("name must be 6 chars")
      // }
      // console.log(this.Forms.get('password')?.errors?.pattern?.actualValue)
      alert("form is invalid")
    }
    else{
      if(this.Match_Password==true){
        this.formService.formData(Name,Phone,Email,Password,Message)
        .subscribe((data:any)=>{
          alert(data.message);  //data contains a message and the submited details
          // console.log(data)
          // localStorage.setItem("Datas",JSON.stringify(data.details.DETAILS))
          //  _id=data.details._id;
        })
        // .subscribe((data:any)=>{
        //   console.log(data);
          // alert(data.message);
        //   // localStorage.setItem("details",data.details)
        // });
        
        this.router.navigateByUrl("/data");
      }
      else{
        alert("password missmatch");
        // this.Forms.setValue({confirmPass:["null"]})
        // this.Forms.patchValue({confirmPass:["null"]})
        // alert(this.Forms.value.confirmPass)
        this.match="true";
      }
    }
  }
}


