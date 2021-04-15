import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { User } from "../models/user.model";


@Injectable({
    providedIn: 'root'
})
export class UserService{

    constructor(private http: HttpClient){}

    log(username: string,password: string){
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        return this.http.post<any>('http://localhost:3000/auth',{username: username,password: password},httpOptions).subscribe(data => localStorage.setItem('jwt-key',data.access_token))
    }

    register(username: string,password: string){
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        return this.http.post<User>('http://localhost:3000/user',{username: username,password: password},httpOptions).subscribe(data => console.log(data))
    }

    getUser(){
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authentication': 'Bearer' + localStorage.getItem('jwt-key')
            }) 
        }
        return this.http.get<User>('http://localhost:3000/user/1',httpOptions).subscribe(data => console.log(data))
    }
}