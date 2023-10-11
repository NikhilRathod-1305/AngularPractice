import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  readonly url ="http://localhost:3000/"
  constructor(private http:HttpClient) { }

  AddUpdateUser(User:any):Observable<any>{
    debugger
    return this.http.post(this.url+"Users",User);
  }

  GetAllUsers():Observable<any>{
    return this.http.get(this.url+"Users");
}

  DeleteUserbyID(id:any):Observable<any>{
    return this.http.delete(this.url+"Users/"+id);
  }
}