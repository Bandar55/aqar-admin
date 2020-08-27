import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from "@angular/forms";   
import { Routes, RouterModule } from '@angular/router';
import { CurrencyComponent } from './currency.component';
import { DataTablesModule } from 'angular-datatables';
import { NgxLoadingModule } from 'ngx-loading';

const routes: Routes = [
  {
    path:'',
    component:CurrencyComponent
  }
];
@NgModule({
  declarations: [CurrencyComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgxLoadingModule.forRoot({})
  ],
  exports: [RouterModule],
  
})
export class CurrencyModule { }
