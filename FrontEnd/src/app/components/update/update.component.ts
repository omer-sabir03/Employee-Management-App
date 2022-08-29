import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';
import { EmpServiceService } from 'src/app/emp-service.service';



@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
   Name!:string;
    Designation!:string;
    Address!:string;

  constructor( private activatedroute:ActivatedRoute,
    private empservice:EmpServiceService,
    private router:Router) { }

  ngOnInit(): void {
    this.empservice.getCurrentEmp(this.activatedroute.snapshot.params['id']).subscribe((result)=>{
      this.Name=result.Name,
        this.Designation=result.Designation,
        this.Address=result.Address
  })}
 
  onUpdate(){
    if(!this.Name || !this.Designation || !this.Address){
      alert(" One or more Fields Empty")
      return;
    }

    const updatedData={
      Name:this.Name,
      Designation:this.Designation,
      Address:this.Address
    }
    this.empservice.updateemp( this.activatedroute.snapshot.params['id'],updatedData).subscribe()
      
    this.router.navigate(['/']);
    alert("Emp Updated Sucessfully")


}
  }