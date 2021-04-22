import { localizedString } from '@angular/compiler/src/output/output_ast';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private userService: UserService,
    private route : Router) { }

  ngOnInit(): void {
    localStorage.setItem('jwt-key','')
  }

  loginUser(){
    this.userService.log(this.username,this.password).subscribe(data => {
      if(data.access_token){
        localStorage.setItem('jwt-key',data.access_token)
        this.route.navigate(['/profile'])
      }
    })
  }
}
