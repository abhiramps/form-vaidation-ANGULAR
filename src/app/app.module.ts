import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsComponent } from './forms/forms.component';
import { DataComponent } from './data/data.component';
import { FormServiceService } from './services/form-service.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import{HttpClientModule} from "@angular/common/http";
import { DefaultPageComponent } from './default-page/default-page.component';
import { FormEditComponent } from './form-edit/form-edit.component'
@NgModule({
  declarations: [
    AppComponent,
    FormsComponent,
    DataComponent,
    DefaultPageComponent,
    FormEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [FormServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
