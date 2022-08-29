import { Component, OnInit } from '@angular/core';
import { EmpServiceService } from 'src/app/emp-service.service';
import { empInterface } from 'src/empIntface';


@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  employees:empInterface[]=[];

  constructor(private empservice:EmpServiceService) { }

  ngOnInit(): void {
    this.empservice.getData().subscribe(data=>this.employees=data);
  
    
  }
 

   deleteEmp(employee:empInterface){
     this.empservice.deleteData(employee).subscribe(()=>
     this.employees=this.employees.filter((t)=>t.id !== employee.id))
     alert("Data Deleted");
     
   }

   

}
