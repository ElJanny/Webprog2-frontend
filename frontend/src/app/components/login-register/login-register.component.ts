import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-register',
  templateUrl: './login-register.component.html',
  styleUrls: ['./login-register.component.css']
})
export class LoginRegisterComponent implements OnInit {
  public signin: boolean = true;
  constructor() { }

  ngOnInit(): void {}

  SwitchToLogin(): void{
    this.signin= true
  }

  SwitchToRegister(): void{
    this.signin= false
  }

  login(event: Object): void{
    console.log(event)
  }

  register(event: Object): void{
    console.log(event)
  }
}
