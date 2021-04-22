import { Component, DoCheck, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, DoCheck {
  public logintext: string = "login"
  constructor() { }
  ngDoCheck(): void {
    let token = localStorage.getItem('jwt-key')
    if (token == undefined || token == "" || token == null){
      this.logintext = "login";
    }else{
      this.logintext = "logout";
    }
  }

  ngOnInit(): void {
  }

  
}
