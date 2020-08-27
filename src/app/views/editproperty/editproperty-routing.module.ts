import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EditpropertyComponent } from './editproperty.component'
const routes: Routes = [
  {
    path:'',
    component:EditpropertyComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EditpropertyRoutingModule { }
