import { Component, OnInit } from '@angular/core';
import {UserService} from './user.service';
import { CategoryService } from '../category/category.service';
import { Subject } from 'rxjs';
import { FormBuilder,FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

declare var $;

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
  reportUserForm: FormGroup;
  dtTrigger1: Subject<any> = new Subject();
  dtTrigger2: Subject<any> = new Subject();
  dtTrigger3: Subject<any> = new Subject();
  users: any = [];
  businessUsers: any = [];
  professionalUsers: any = []
  categories: any = [];
  subcategories: any = [];
  user: any = {};
  message: string = "";
  full_name: string;
  category: string;
  subcategory: string;
  gender: string;
  birth_year: string;
  email: string;
  country: string;
  country_code: string;
  phone: string;
  currency: string;
  measurement: string;
  app_lang: string;
  speak_lang: string;
  fileToUpload: File = null;
  block: Boolean;
  userId: String;
  chatDetails: any = []
  constructor(private fb:FormBuilder, private userService: UserService, private categoryService: CategoryService, private toastr:ToastrService) { 
    this.reportUserForm = this.fb.group({
      reply: [''],
    });
  }

  ngOnInit() {
    this.block = false;
    this.normalUserList()
    this.professionalUserList()
    this.businessUserList()
    this.categoryService.getAllCategory().subscribe(res=> {
      if(res.status == 'success') {
        this.categories = res.data;
      } else {
        this.message = res.message;
      }
    });

  }
  
  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
  }

  normalUserList(){
    this.userService.normalUser().subscribe(res => {
      if(res.response_code == 200) {
        this.users = res.Data
        this.dtTrigger1.next()
      } else {
        this.message = res.message;
      }
    });
  }

  professionalUserList(){
    this.userService.professionalUser().subscribe(res => {
      if(res.response_code == 200) {
        this.professionalUsers = res.Data
        this.dtTrigger2.next()
      } else {
        this.message = res.message;
      }
    });
  }

  businessUserList(){
    this.userService.businessUser().subscribe(res => {
      if(res.response_code == 200) {
        this.businessUsers = res.Data
        this.dtTrigger3.next()
      } else {
        this.message = res.message;
      }
    });
  }

  selectSubcategry(event) {
    let data = {
      categoryId: event.target.value
    }
    this.categoryService.getSubCategory(data).subscribe(res => {
      if(res.status == 'success') {
        this.subcategories = res.data;
      } else {
        this.message = res.message;
      }
    });
  }

  // verifyUser(userId){
  //   console.log('verify', userId)
  //   if(userId != null && userId != ''){
  //     this.userService.verify(userId).subscribe(res => {
  //       console.log(res)
  //       if(res.response_code == 200) {
  //         this.block = true;
  //         this.successmsg = res.response_message;
  //       } else {
  //         this.errormsg = res.response_message;
  //       }
  //     })
  //   }
  // }

  blockVerifyUser(userId, status, type){
    let data = {
      userId: userId,
      status: status
    }
    if(userId != null && userId != ''){
      this.userService.blockAndVerifyUser(data).subscribe(res => {
        if(res.response_code == 200) {
          this.toastr.success(res.response_message);
        } else if(res.response_code == 501){
          this.toastr.error(res.response_message);
        }  else {
          this.toastr.error('Something went wrong!');
        }
        if(type == 'normal'){
          this.normalUserList()
        } else if(type == 'professional'){
          this.professionalUserList()
        } else if(type == 'business'){
          this.businessUserList()
        }
      })
    }
  }

  deleteUser(userId){
    if(userId != null && userId != ''){
      let data = {
        userId: userId
      }
      this.userService.delete(data).subscribe(res => {
        // if(res.response_code == 200) {
        //   this.successmsg = res.response_message;
        // } else {
        //   this.errormsg = res.response_message;
        // }
      })
    }
  }

  report(id){
    this.userId = id
    let data = {
      userId: this.userId,
    }
    this.userService.reportDet(data).subscribe(res=> {
      this.chatDetails = res.Data
    });
  }

  onReport(){
    let data = {
      userId: this.userId,
      reply: this.reportUserForm.value.reply
    }
    this.userService.report(data).subscribe(res=> {
      // if(res.status == 'success') {
      //   this.categories = res.data;
      // } else {
      //   this.message = res.message;
      // }
    });
  }

  onAddUserSubmit(){
    let userJson = {
      fullName: this.full_name,
      categoryId: this.category,
      subCategory: this.subcategory,
      gender: this.gender,
      birthYear: this.birth_year,
      email: this.email,
      country: this.country,
      countryCode: this.country_code,
      mobileNumber: this.phone,
      currency: this.currency,
      measurement: this.measurement,
      appLanguage: this.app_lang,
      speakLanguage: this.speak_lang,
    };
    $('#addUser').modal('hide');
    this.userService.create(userJson, this.fileToUpload).subscribe(res => {
      // if(res.status == 'success') {
      //   this.successmsg = res.response_message;
      // } else {
      //   this.errormsg = res.response_message;
      // }
    })
  }

  getUserDetails(id){
    if(id && id != null){ 
      this.userService.getUserById(id).subscribe(res => { 
        if(res.response_code == 200) {
        this.user = res.Data;
      } else {
        this.message = res.message;
       }
      })
    }
  }

}
