import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { EmpdetailsComponent } from './components/empdetails/empdetails.component';
import { EmployeedetailsComponent } from './components/employeedetails/employeedetails.component';
import { CreateemployeeComponent } from './components/createemployee/createemployee.component';
import { FooterComponent } from './components/footer/footer.component';
import { AboutComponent } from './components/about/about.component';
import { EmpmanagementComponent } from './components/empmanagement/empmanagement.component';
import { UpdateComponent } from './components/update/update.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EmpdetailsComponent,
    EmployeedetailsComponent,
    CreateemployeeComponent,
    FooterComponent,
    AboutComponent,
    EmpmanagementComponent,
    UpdateComponent
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
