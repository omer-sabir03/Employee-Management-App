import { Component, OnInit ,Output,EventEmitter} from '@angular/core';
import {  Router } from '@angular/router';
import { empInterface } from 'src/empIntface';

@Component({
  selector: 'app-createemployee',
  templateUrl: './createemployee.component.html',
  styleUrls: ['./createemployee.component.css']
})
export class CreateemployeeComponent implements OnInit {
   
  @Output() submitData:EventEmitter<empInterface>=new EventEmitter()
 
  Name!:string;
    Designation !:string;
    Address!:string


  constructor( private router:Router) { }

  ngOnInit(): void {
  }

  onSubmit(){

    if(!this.Name || !this.Address || !this.Designation){

     alert('Field/Fields Empty ')
     return;
    }
    const newData={
      Name:this.Name,
      Address:this.Address,
      Designation:this.Designation
    }
     
    this.submitData.emit(newData)

    this.Name='',
    this.Designation='',
    this.Address=''


    window.location.reload()

  }
  

}
