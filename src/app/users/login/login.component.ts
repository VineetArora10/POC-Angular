import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public email: any;
  public password: any;
  public data: any;
  constructor(
    private router: Router,
    private http: HttpClient,
    private authservice: AuthService
    ) { }

  ngOnInit(): void {
  }

  login(){
  this.authservice.getdata().subscribe((data)=>{
    this.data=data;
    for(let i = 0; i < this.data.length; i++)
    {
    if(this.data[i].email==this.email && this.data[i].password==this.password)
     {
       console.log("Verified");
       this.authservice.send.next(this.data[i]);
       localStorage.setItem("user","pass");
       this.router.navigateByUrl("/userdash");
     }
    }
  })
  }
}
