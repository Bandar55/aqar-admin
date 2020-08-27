import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";   


import { UserRoutingModule } from './user-routing.module'
import {UserComponent} from './user.component'
import {UserService} from './user.service'
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [UserComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    UserRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    DataTablesModule,
  ],
  providers: [UserService]
})
export class UserModule { }
