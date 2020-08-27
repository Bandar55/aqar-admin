import { NgModule ,} from '@angular/core';
import { CommonModule ,} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ContentRoutingModule } from './content-routing.module';
import { ContentComponent } from './content.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [ContentComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ContentRoutingModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: []
})
export class ContentModule { }
