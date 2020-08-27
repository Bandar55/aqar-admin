import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from './login.service';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dashboard',
  templateUrl: 'login.component.html'
})
export class LoginComponent implements OnInit  { 
  loginForm: FormGroup;
  data: any;
  cookieEmail: string;
  cookiePwd: string;
  cookieRemember: string;
  remember: Boolean;
  formSubmited: boolean = false;
  constructor(private fb:FormBuilder, private router: Router,
     private loginService: LoginService, private cookieService: CookieService,private toastr:ToastrService ) { 
    this.loginForm = this.fb.group({
       email: ['', [Validators.required, Validators.pattern(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['', [Validators.required]],
      remember:['',Validators.required],
    })
  }
 
  ngOnInit() {
    this.cookieEmail = this.cookieService.get('email');
    this.cookiePwd = this.cookieService.get('password');
    this.cookieRemember = this.cookieService.get('remember');
    if(this.cookieRemember == 'true'){
      this.remember = true
    } else {
      this.remember = false
    }
    this.loginForm.setValue({
      email: this.cookieEmail, 
      password: this.cookiePwd,
      remember: this.remember
    });
  }

  loginSubmit() {
    this.formSubmited = true
    if(this.loginForm.invalid){
      return
    }
    let data = {
      email: this.loginForm.value.email,
      password: this.loginForm.value.password,
      remember: this.loginForm.value.remember,
    }
    if(data.remember == true) {
      this.cookieService.set('email', data.email);
      this.cookieService.set('password', data.password);
      this.cookieService.set('remember', 'true');
    } else {
      this.cookieService.delete('email');
      this.cookieService.delete('password');
      this.cookieService.set('remember', 'false');
    }
    this.loginService.login(data).subscribe(res => {
      if(res.response_code == 200) {
        this.data = res.Data;
        localStorage.setItem('userid', this.data._id);
        localStorage.setItem('jwtToken', this.data.jwtToken);
        localStorage.setItem('userType', this.data.Type);
        if(this.data.Type == 'Admin'){
          this.toastr.success(res.response_message);
        }
        if(this.data.Type == 'Subadmin'){
          this.toastr.success('Subadmin has logged in successfully');
        }  
        this.router.navigate(['dashboard']);
      } 
      else if(res.response_code == 401) {
        this.toastr.error(res.response_message);
      } else {
        this.toastr.error('Something went wrong!');
      }
    })
  }
  
}
