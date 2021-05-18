import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-admindash',
  templateUrl: './admindash.component.html',
  styleUrls: ['./admindash.component.css']
})
export class AdmindashComponent implements OnInit {

  public index: any;
  public issearched=false;

  constructor(
    private authservice: AuthService
  ) { }

  ngOnInit(): void {
    this.getdata();
  }

  public data:any;

  getdata() {
    this.authservice.getdata().subscribe(data=>{
    this.data = data;
    })
  }

  block(index) {
    this.data[index].block = true;
    this.authservice.update(this.data[index].id, this.data[index]).subscribe(data=>{
      console.log(data);
    });
  }
}