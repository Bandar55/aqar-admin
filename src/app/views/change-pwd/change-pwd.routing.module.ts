import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ChangePwdComponent } from './change-pwd.component';
const routes: Routes = [
  {
    path:'',
    component:ChangePwdComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChangePwdRoutingModule { }
