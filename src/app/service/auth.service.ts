import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public data: any;
  id: string;

  userurl = "http://localhost:3000/users";

  constructor(
    private router: Router,
    private http: HttpClient
  ) { }
    
  public send=new BehaviorSubject({})
  public collect=<any>this.send.asObservable();

  getdata() {
    return this.http.get("http://localhost:3000/users");
  }

  getAdminData() {
    return this.http.get("http://localhost:3000/admin");
  }

  update(id, data) {
    return this.http.put(`${this.userurl}`+`/${id}`,data);
  }

  updatereqlist(id,data){
    return this.http.put(`${this.userurl}`+`/${id}`,data);
  }
}