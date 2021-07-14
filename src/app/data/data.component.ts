
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormServiceService } from '../services/form-service.service';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  public DATA: { name: string, phone: number, email: string, password: string, message: string }[] = [];
  // public DATA:any=[]

//  public BackendData:any=localStorage.getItem("details");
  constructor(private formService: FormServiceService,private router:Router) {

    // this.DATA = formService.Details;
    // console.log(this.DATA)
    // this.formService.getData()

    this.formService.getData()  //for fetching all the form datas
    .subscribe((data:any)=>{
      // console.log(data)
     this.DATA=data.data
    });

    // this.DATA=this.formService.data
    // this.DATA=JSON.parse(localStorage.getItem("Datas"));
    // console.log(JSON.parse(this.DATA))
    // var abc:any=localStorage.getItem("Datas");
    // console.log(JSON.parse(localStorage.getItem("Datas")))
    // this.DATA.push(localStorage.getItem("Datas"))
    //  console.log(JSON.parse(this.DATA))
    //  localStorage.clear()
    // console.log(this.DATA)
    // this.DATA = this.BackendData
  }

  ngOnInit(): void {
  }

  onEdit=(datas:any)=>{
    // alert(datas._id)
    this.router.navigate(["data",datas._id])
  }
  Delete=(datas:any)=>{
    this.formService.deleteItem(datas._id)
    .subscribe((result:any)=>{
      console.log(result)
      alert(result.message);
    })
  }
}
