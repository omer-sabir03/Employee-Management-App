import { Component, OnInit } from '@angular/core';
import { empInterface } from 'src/empIntface';
import { EmpServiceService } from 'src/app/emp-service.service';

@Component({
  selector: 'app-empmanagement',
  templateUrl: './empmanagement.component.html',
  styleUrls: ['./empmanagement.component.css']
})
export class EmpmanagementComponent implements OnInit {
  employees: empInterface[]=[];

  constructor( private empservice:EmpServiceService) { }
  ngOnInit(): void {
  }
  
  submitEmpData(employee:empInterface){
    this.empservice.addemp(employee).subscribe((data)=>this.employees.push(data));
  

  }

}
