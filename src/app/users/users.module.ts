import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { VerifyUserComponent } from './verify-user/verify-user.component'


@NgModule({
  declarations: [
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    VerifyUserComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  exports: [
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    VerifyUserComponent
  ]
})
export class UsersModule { }