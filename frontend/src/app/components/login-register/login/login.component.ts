import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/api/services/user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public username: string=""
  public password: string =""
  @Output() login = new EventEmitter<Object>()
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    localStorage.setItem('jwt-key','')
  }

  loginUser(){
    this.userService.log(this.username,this.password)
    //this.login.emit({username:this.username,password:this.password})
  }
}
