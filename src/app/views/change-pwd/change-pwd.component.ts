import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login/login.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-change-pwd',
  templateUrl: './change-pwd.component.html',
  styleUrls: ['./change-pwd.component.scss']
})
export class ChangePwdComponent implements OnInit {
  msg: string;
  successmsg: string;
  errormsg: string;
  changepwdForm: FormGroup;
  formSubmited: boolean = false;
  constructor(private loginService: LoginService, private fb:FormBuilder,private toastr:ToastrService, private router: Router) {
    this.changepwdForm = this.fb.group({
      oldpwd: ['', [Validators.required]],
      newpwd: ['', [Validators.required]],
      confirmpwd: ['', [Validators.required]],
    })
  }

  ngOnInit() {
  }

  onSubmit(){
    this.formSubmited = true
    if(this.changepwdForm.value.newpwd != this.changepwdForm.value.confirmpwd){
      this.msg = 'New password and confirm password should match'
      return   
    }
    if(this.changepwdForm.invalid){
      return
    }
    let data = {
      adminId: localStorage.getItem('userid'),
      oldPassword: this.changepwdForm.value.oldpwd,
      newPassword:  this.changepwdForm.value.newpwd,
    } 
    this.loginService.changePwd(data).subscribe(res=> {
      if(res.response_code == 200) {
        this.toastr.success(res.response_message);
        this.router.navigate(['dashboard'])
      } else if(res.response_code == 401) {
        this.toastr.error(res.response_message);
      } else {
        this.toastr.error('Something went wrong!');
      }
    })
  }

}
