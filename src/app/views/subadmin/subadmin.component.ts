import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import {SubadminService} from './subadmin.service';
import { Subject } from 'rxjs';
import { navItems } from '../../_nav';
import { ToastrService } from 'ngx-toastr';

declare var $;
@Component({
  selector: 'app-subadmin',
  templateUrl: './subadmin.component.html',
  styleUrls: ['./subadmin.component.scss']
})
export class SubadminComponent implements OnInit {
  public navItems = navItems
  addsubadminForm: FormGroup;
  editSubadminForm: FormGroup;
  subadmins: any = [];
  subAdminData: any = {};
  subadminId: ''
  dtTrigger: Subject<any> = new Subject();
  formSubmited: boolean = false;
  msg: string;
  constructor(private fb: FormBuilder, private subadminService: SubadminService,private toastr:ToastrService) { 
    this.addsubadminForm = this.fb.group({
      subadminname:['',[Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password:['',Validators.required],
      cnfpassword:['',Validators.required],
    })
    this.editSubadminForm = this.fb.group({
      subadminname:['',[Validators.required]],
      email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      // UserPermission: ['',Validators.required],
      // propertyPermission: ['',Validators.required],
      // categoryPermission: ['',Validators.required],
      // marketPermission: ['',Validators.required],
      // contentPermission: ['',Validators.required],
    })
  }

  ngOnInit() {
    this.subAdminList()
  }

  subAdminList(){
    this.subadminService.subAdminList().subscribe(res => {
      if(res.response_code == 200) {
        this.subadmins = res.Data
        this.dtTrigger.next()
      } 
    })
  }

  getDetails(id){
    this.subadminId = id
    this.subadminService.getDetails(id).subscribe(res => {
      if(res.response_code == 200) {
        this.subAdminData = res.Data 
        console.log(this.subAdminData)
        this.editSubadminForm.patchValue({
          subadminname: this.subAdminData.name,
          email: this.subAdminData.email,
          UserPermission: this.subAdminData.permission[0],
          propertyPermission: this.subAdminData.permission[1],
          categoryPermission: this.subAdminData.permission[2],
          marketPermission: this.subAdminData.permission[3],
          contentPermission: this.subAdminData.permission[4],
        })
      } 
    })
  }

  deleteSubadmin(id){
    this.subadminService.deleteSubadmin(id).subscribe(res => {
      console.log(res)
      if(res.response_code == 200) {
        this.toastr.success(res.response_message);
        // this.subAdminList()
      } else {
        this.toastr.error('Something went wrong!');
      }
    })
  }

  addSubadmin(){
    this.formSubmited = true
    if(this.addsubadminForm.invalid){
      return
    }
    if(this.addsubadminForm.value.password != this.addsubadminForm.value.cnfpassword){
      this.msg = 'New password and confirm password should match'
      return   
    }
    let permission = [];
    $(".checkbox:checked").each(function(){
      permission.push({
        name: $(this).data('name'),
        url: $(this).data('url'),
        icon: $(this).data('icon')
      })
    })
    let data = {
      name: this.addsubadminForm.value.subadminname,
      email: this.addsubadminForm.value.email,
      password: this.addsubadminForm.value.password,
      permission: permission,
      Type: 'Subadmin'
    }
    $('#addSubadmin').modal('hide');
    this.subadminService.createSubadmin(data).subscribe(res => {
      if(res.response_code == 200) {
        this.toastr.success(res.response_message);
        this.subAdminList()
      } else if(res.response_code == 501){
        this.toastr.error(res.response_message);
      } else {
        this.toastr.error('Something went wrong!');
      }
    })
  }

  editSubadmin(){
    this.formSubmited = true
    if(this.addsubadminForm.invalid){
      return
    }
    let permission = [];
    // permission.push(
    //   this.editSubadminForm.value.UserPermission,
    //   this.editSubadminForm.value.propertyPermission,
    //   this.editSubadminForm.value.categoryPermission,
    //   this.editSubadminForm.value.marketPermission,
    //   this.editSubadminForm.value.contentPermission,
    // )
    $(".checkbox:checked").each(function(){
      permission.push({
        name: $(this).data('name'),
        url: $(this).data('url'),
        icon: $(this).data('icon')
      })
    })
    let data = {
      name: this.editSubadminForm.value.subadminname,
      email: this.editSubadminForm.value.email, 
      id: this.subadminId,
      permission: permission
    }
    $('#editSubadmin').hide()
    this.subadminService.editSubadmin(data).subscribe(res => {
      console.log(res)
      if(res.response_code == 200) {
        this.toastr.success(res.response_message);
        this.subAdminList()
      } else {
        this.toastr.error('Something went wrong!');
      }
    })
  }

}
