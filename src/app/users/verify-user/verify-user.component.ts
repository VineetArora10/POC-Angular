import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Cotter from 'cotter';

@Component({
  selector: 'app-verify-user',
  templateUrl: './verify-user.component.html',
  styleUrls: ['./verify-user.component.css']
})
export class VerifyUserComponent implements OnInit {
  public id: any;
  success= false;
  payload= null;
  payloadString= null;

  constructor(
    private router: Router
  ) { }

  ngOnInit() {

  var cotter = new Cotter("1e736ebd-fb55-4c93-a2f6-23f8486ceb5a");
  cotter.signInWithLink()
  .showEmailForm()
  .then((payload: object) => {
    this.success = true;
    this.payload = payload;
    this.payloadString = JSON.stringify(payload, null, 4);
    this.router.navigateByUrl("/login");
  })
  .catch((arr: any) => console.log(arr));
}
}