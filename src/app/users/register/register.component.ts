import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm = new FormGroup({
    id: new FormControl(''),
    phone : new FormControl(''),
    username : new FormControl(''),
    address : new FormControl(''),
    email : new FormControl(''),
    password : new FormControl('')
  })

  constructor(
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
  
  img = null;
  onFileSelected(event) {
    this.img = <File>event.target.files[0].name;
    console.log(this.img);
  }

  onSubmit() {
    this.registerForm.value.src="assets/"+`${this.img}`;
    this.registerForm.value.block=false;
    this.registerForm.value.friends=[];
    this.registerForm.value.requests=[];
    console.log(this.registerForm.value);
    this.http.post("http://localhost:3000/users",this.registerForm.value).subscribe(data => {
    console.log(data,"registered!");
    this.router.navigateByUrl("verifyuser");
    })

  }
}
