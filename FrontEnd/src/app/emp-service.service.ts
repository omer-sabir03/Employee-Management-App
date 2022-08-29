import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http'
import { empInterface } from 'src/empIntface';






@Injectable({
  providedIn: 'root'
})
export class EmpServiceService {
    apiUrl= 'http://localhost:3000/empData';
  constructor( private httpclient:HttpClient) { }

  getData(): Observable<empInterface[]>{
    return this.httpclient.get<empInterface[]>(this.apiUrl)
    
  }
    
  deleteData(employee:empInterface):Observable<empInterface>{
   const  Url=`${this.apiUrl}/${employee.id}`
      return this.httpclient.delete<empInterface>(Url)
  }

  addemp(employee:empInterface):Observable<empInterface>{
    return this.httpclient.post<empInterface>(this.apiUrl ,employee)
  }
 
 getCurrentEmp(id:any):Observable<empInterface>{
  const  Url=`${this.apiUrl}/${id}`
    return this.httpclient.get<empInterface>(Url)
 }
 updateemp(_id:any,data:any):Observable<empInterface>{
  const  Url=`${this.apiUrl}/${_id}`;
    return   this.httpclient.put<empInterface>(Url,data)
 }

}
 