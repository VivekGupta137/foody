import { HttpClient } from '@angular/common/http';
import { EventEmitter, Inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { BACKEND_URL } from '../constants.token';

@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate{
  constructor(private router: Router, private http: HttpClient, @Inject(BACKEND_URL) private url: string ){  }

  loggedIn: boolean;
  authStatusChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  auth: {isAuthenticated: boolean, userid: number};
  HEADER: {'headers':{'userid':string}};
  isAuthenticated(): boolean{
    return this.loggedIn;
  }
  login(){
    let credential = {'username' : 'vivek', 'password' : 'vivek', 'role': 'ROLE_USER'};
    this.http.post<{isAuthenticated: boolean, userid: number}>(this.url+"api/auth/login", credential)
    .subscribe(
      response => {
        this.auth = response;
        this.loggedIn = this.auth.isAuthenticated;
        this.authStatusChange.emit(this.loggedIn);
        this.HEADER = {'headers':{'userid':this.auth.userid.toString()}};
      }
    );

  }
  logout(){
    this.router.navigate(['/']);
    this.loggedIn = false;
    this.authStatusChange.emit(this.loggedIn);
    this.HEADER = null;
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
    return this.loggedIn;
  }
}
