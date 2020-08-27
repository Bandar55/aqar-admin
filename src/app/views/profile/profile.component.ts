import { Component, OnInit } from '@angular/core';
import { ProfileService } from './profile.service'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  userid: string;
  user: any = {};

  constructor(private profileService: ProfileService) { }

  ngOnInit() {
    this.userid = localStorage.getItem('userid');
    if(this.userid && this.userid != null) {
      this.profileService.adminDetails(this.userid).subscribe(res => {
        if(res.response_code == 200) {
          this.user = res.Data;
        }
      });
    }
  }

}
