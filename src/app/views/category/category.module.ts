import { NgModule ,} from '@angular/core';
import { CommonModule ,} from '@angular/common';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { CategoryRoutingModule } from './category-routing.module';
import { CategoryComponent } from './category.component';
import {CategoryService} from './category.service';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { NgxLoadingModule } from 'ngx-loading';

@NgModule({
  declarations: [CategoryComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    CategoryRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    NgxLoadingModule.forRoot({})
  ],
  providers: [CategoryService]
})
export class CategoryModule { }
