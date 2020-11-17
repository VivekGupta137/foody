import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/Auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  nvbarToggle: boolean;
  constructor(private auth: AuthService) { }

  ngOnInit(): void {
    this.nvbarToggle = false;
  }
  login(){
    this.auth.login();
  }
  logout(){
    this.auth.logout();
  }
}
