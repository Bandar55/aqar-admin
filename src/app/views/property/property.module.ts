import { NgModule} from '@angular/core';
import { CommonModule} from '@angular/common';
import { FormsModule } from '@angular/forms';

import { PropertyRoutingModule } from './property-routing.module'
import {PropertyComponent} from './property.component'
import {PropertyService} from './property.service'
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [PropertyComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    PropertyRoutingModule,
    FormsModule,
    DataTablesModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [PropertyService]
})
export class PropertyModule { }
