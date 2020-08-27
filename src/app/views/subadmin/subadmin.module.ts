
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";   
import { subAdminRoutingModule } from './subadmin-routing.module'
import { SubadminComponent } from './subadmin.component';
import { SubadminService } from './subadmin.service'
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { NgxLoadingModule } from 'ngx-loading';
@NgModule({
  declarations: [SubadminComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    subAdminRoutingModule,
    DataTablesModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [SubadminService]
})
export class SubAdminModule { }
