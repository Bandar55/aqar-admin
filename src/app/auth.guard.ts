import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { LoginService } from './views/login/login.service'

@Injectable()
export class AuthGuard  {

  constructor(private loginService: LoginService, private router: Router) { }
  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if(localStorage.getItem('jwtToken') && localStorage.getItem('jwtToken') != '' && localStorage.getItem('jwtToken') != null) {
      return true;
    } else {
      return false;
    }
  }
}
