import { Component, EventEmitter, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public username: string=""
  public password: string =""
  @Output() regist = new EventEmitter<Object>()
  constructor() { }

  ngOnInit(): void {
  }

  RegisterUser(): void{
    this.regist.emit({username:this.username,password:this.password})
  }
}
