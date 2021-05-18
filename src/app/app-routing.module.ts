import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminloginComponent } from './admin/adminlogin/adminlogin.component';
import { AdmindashComponent } from './admindashboard/admindash/admindash.component';
import { UserdashComponent } from './dashboard/userdash/userdash.component';
import { AdminGuard } from './guard/admin.guard';
import { AuthguardGuard } from './guard/authguard.guard';
import { HomeComponent } from './users/home/home.component';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { VerifyUserComponent } from './users/verify-user/verify-user.component';

const routes: Routes = [
  {
    path:"",
    component:HomeComponent
  },
  {
    path:"login",
    component: LoginComponent
  },
  {
    path:"register",
    component: RegisterComponent
  },
  {
    path:"adminlogin",
    component: AdminloginComponent
  },
  {
    path:"userdash",
    component: UserdashComponent
  },
  {
    path:"admindash",
    component: AdmindashComponent, canActivate: [AdminGuard]
  },
  {
    path:"verifyuser",
    component: VerifyUserComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }