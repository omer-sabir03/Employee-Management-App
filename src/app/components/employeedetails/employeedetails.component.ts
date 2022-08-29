import { Component, OnInit,Input ,Output,EventEmitter} from '@angular/core';
import { empInterface } from 'src/empIntface';



@Component({
  selector: 'app-employeedetails',
  templateUrl: './employeedetails.component.html',
  styleUrls: ['./employeedetails.component.css']
})
export class EmployeedetailsComponent implements OnInit {
 @Input() employee!:empInterface;
   @Output() onDeleteEmp:EventEmitter<empInterface>=new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
     onDelete(employee:empInterface){
        this.onDeleteEmp.emit(employee)
     }
       
   
     
  }




