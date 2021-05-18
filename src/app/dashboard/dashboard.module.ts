import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserdashComponent } from './userdash/userdash.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    UserdashComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    UserdashComponent
  ]
})
export class DashboardModule { }