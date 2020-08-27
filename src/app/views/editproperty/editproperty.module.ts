
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";   
import { EditpropertyRoutingModule } from './editproperty-routing.module'
import { EditpropertyComponent } from './editproperty.component';
import { PropertyService } from '../property/property.service'
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

@NgModule({
  declarations: [EditpropertyComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    EditpropertyRoutingModule,
  ],
  providers: [PropertyService]
})
export class EditpropertyModule { }
