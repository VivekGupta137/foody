import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{
  constructor(private router: Router){  }

  loggedIn: boolean;

  isAuthenticated(): boolean{
    return this.loggedIn;
  }
  login(){
    this.loggedIn = true;
  }
  logout(){
    this.router.navigate(['/']);
    this.loggedIn = false;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.loggedIn;
  }
}
