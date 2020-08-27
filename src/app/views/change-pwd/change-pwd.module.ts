import { NgModule ,} from '@angular/core';
import { CommonModule ,} from '@angular/common';
import { ReactiveFormsModule,FormsModule } from "@angular/forms";   

import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ChangePwdRoutingModule } from './change-pwd.routing.module';
import { ChangePwdComponent } from './change-pwd.component';
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

@NgModule({
  declarations: [ChangePwdComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ChangePwdRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  providers: []
})
export class ChangePwdModule { }
