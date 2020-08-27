import { NgModule ,} from '@angular/core';
import { CommonModule ,} from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { SubCategoryRoutingModule } from './sub-category.routing.module';
import { SubCategoryComponent } from './sub-category.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [SubCategoryComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    SubCategoryRoutingModule,
    ReactiveFormsModule,
    ChartsModule,
    BsDropdownModule,
    DataTablesModule,
    ButtonsModule.forRoot()
  ],
  providers: []
})
export class SubCategoryModule { }
