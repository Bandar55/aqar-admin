import { Component, OnInit } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { navItems } from '../../_nav';
import { Router } from '@angular/router'
import { ProfileService } from '../default-layout/../../views/profile/profile.service'

@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit {
  public navData;
  public sidebarMinimized = true;
  private changes: MutationObserver;
  public element: HTMLElement;
  constructor(private router: Router,private profileService: ProfileService) {}

  ngOnInit(){
    let usertype = localStorage.getItem('userType');
    if(usertype == 'Admin') {
      this.navData = navItems
    } else {
      let userId = localStorage.getItem('userid');
      if(userId != '' && userId != null) {
        this.profileService.adminDetails(userId).subscribe(res => {
          if(res.response_code == 200) {
            this.navData = res.Data.permission
          }
        });
      }
    }
  }
  logout() {
    localStorage.removeItem('userid');
    localStorage.removeItem('jwtToken');
    this.router.navigate(['login']);
  }

}
