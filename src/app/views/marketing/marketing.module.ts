import { NgModule ,} from '@angular/core';
import { CommonModule ,} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { MarketingRoutingModule } from './marketing-routing.module';
import { MarketingComponent } from './marketing.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [MarketingComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    MarketingRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: []
})
export class MarketingModule { }
