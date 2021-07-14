import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DataComponent } from './data/data.component';
import { DefaultPageComponent } from './default-page/default-page.component';
import { FormEditComponent } from './form-edit/form-edit.component';
import { FormsComponent } from './forms/forms.component';

const routes: Routes = [
  {path:"",component:DefaultPageComponent},
  {path:"forms" ,component:FormsComponent},
  {path:"data",component:DataComponent},
  {path:"data/:id",component:FormEditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
