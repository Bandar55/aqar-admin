import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../user/user.service';
import { PropertyService } from '../property/property.service';


@Component({
  templateUrl: 'dashboard.component.html'
})
export class DashboardComponent implements OnInit {
  totalRegisterUser: number = 0;
  professionalUsers: number = 0;
  businessUsers: number = 0;
  totalProperties: number = 0;
  constructor(private userService: UserService, private propertyService: PropertyService) { }
 
  ngOnInit(): void {
    this.userService.totalRegisterUser().subscribe(res => {
      if(res.response_code == 200){
        this.totalRegisterUser = res.Data.length;
      }
    });
    this.userService.professionalUser().subscribe(res => {
      if(res.response_code == 200){
        this.professionalUsers = res.Data.length;
      }
    });
    this.userService.businessUser().subscribe(res => {
      if(res.response_code == 200){
        this.businessUsers = res.Data.length;
      }
    });
    this.propertyService.getAllProperty().subscribe(res => { 
      if(res.response_code == 200) {
        this.totalProperties = res.Data.length;
      } 
    })
  }


}
