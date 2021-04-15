import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from 'src/app/api/services/user.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  public username: string=""
  public password: string =""
  @Output() regist = new EventEmitter<Object>()
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  RegisterUser(): void{
    this.userService.register(this.username,this.password)
  }
}
