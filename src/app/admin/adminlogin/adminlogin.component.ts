import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent implements OnInit {
  public eid: any;
  public email: any;
  public password: any;
  public data: any;
  public i: any;

  constructor(
    private http: HttpClient,
    private router: Router,
    private authservice: AuthService
    ) { }

  ngOnInit(): void {
  }

  adminlogin() {
    this.authservice.getAdminData().subscribe((data)=>{
      this.data=data;
      for(this.i = 0; this.i < this.data.length; this.i++)
      {
      if(data[this.i].eid==this.eid && data[this.i].email==this.email && data[this.i].password==this.password)
       {
         console.log("Verified");
         this.router.navigateByUrl("/admindash");
       }
      }
    })
  }

}
