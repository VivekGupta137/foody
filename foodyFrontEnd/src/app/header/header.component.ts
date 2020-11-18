import { HttpClient } from '@angular/common/http';
import { Component, Inject, OnInit } from '@angular/core';
import { BACKEND_URL } from '../constants.token';
import { AuthService } from '../services/Auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nvbarToggle: boolean;
  loginState: boolean;
  constructor(private auth: AuthService, private http: HttpClient, @Inject(BACKEND_URL) private url: string ) { }

  ngOnInit(): void {
    this.nvbarToggle = false;
    this.auth.authStatusChange.subscribe(
      response => this.loginState = response
    );

  }
  login(){
    this.auth.login();
  }
  logout(){
    this.auth.logout();
  }
  dummy(){
    this.http.get(this.url+"api/dummy",{responseType: "text"}).subscribe(response=>console.log(response));
  }
}
