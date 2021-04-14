import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string=""
  public password: string =""
  @Output() login = new EventEmitter<Object>()
  constructor() { }

  ngOnInit(): void {
  }

  loginUser(){
    this.login.emit({username:this.username,password:this.password})
  }
}
