import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-userdash',
  templateUrl: './userdash.component.html',
  styleUrls: ['./userdash.component.css']
})
export class UserdashComponent implements OnInit {

  public currentuser: any;
  public alluser: any;
  public searched:any;
  public searcheduser:any;  
  public issearched=false;
  public friendlist:any;
  public reqlist:any;
  public sendreq=[];

  constructor(
    private router: Router,
    private authservice: AuthService 
  ) { }

  ngOnInit(): void {
    this.profiledata();
    this.getallusers();
  }

  profiledata(){
    this.authservice.collect.subscribe((data: any)=>{
    this.currentuser=data;
    console.log(data);
    });
  }

  getallusers(){
    this.authservice.getdata().subscribe(data=>{
    this.alluser=data;
    this.friendlist=this.currentuser.friends;
    this.reqlist=this.currentuser.requests;
    });
  }

  getsearched(){
    for(let i=0;i<this.alluser.length;i++){
      if(this.searched==this.alluser[i].username || this.searched==this.alluser[i].email){
        this.searcheduser=this.alluser[i];
        console.log(this.searcheduser,"searched user");
        this.issearched=true;
      }
    }
  }

  close(){
    this.issearched=false;
  }

  Acceptreq(index){
    let acc=this.reqlist[index];
  this.reqlist.splice(index,1);
  this.friendlist.push(acc);
  this.currentuser.requests=this.reqlist;
  this.authservice.updatereqlist(this.currentuser.id,this.currentuser).subscribe(data=>{
  
  })
  }
  reject(index){
    this.reqlist.splice(index,1);
  }
  
  add(){
    this.sendreq.push(this.currentuser.username);
    this.searcheduser.requests=this.sendreq;
  
    this.authservice.updatereqlist(this.searcheduser.id,this.searcheduser).subscribe(data=>{
  
    });
  }
  }
  