
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ButtonsModule } from 'ngx-bootstrap/buttons';

import { ProfileRoutingModule } from './profile-routing.module'
import { ProfileComponent } from './profile.component';
import { ProfileService } from './profile.service'
import { HttpClientModule, HttpHeaders } from '@angular/common/http';

@NgModule({
  declarations: [ProfileComponent],
  imports: [
    HttpClientModule,
    CommonModule,
    ProfileRoutingModule,
    FormsModule,
    ChartsModule,
    BsDropdownModule,
    ButtonsModule.forRoot()
  ],
  providers: [ProfileService]
})
export class ProfileModule { }
