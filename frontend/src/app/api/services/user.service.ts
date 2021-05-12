import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Job } from "../models/jobs.model";
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
        return this.http.post<any>('http://localhost:3000/auth',{username: username,password: password},httpOptions)
    }

    register(username: string,password: string){
        const httpOptions = {
            headers: new HttpHeaders({
                'Content-Type': 'application/json'
            })
        }
        return this.http.post<User>('http://localhost:3000/user',{username: username,password: password},httpOptions).subscribe(data=> console.log(data))
    }

    getUser(){
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt-key')
            }) 
        }
        return this.http.get<User>('http://localhost:3000/user/1',httpOptions)
    }

    addJobToUser(jobs:Job){
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt-key')
            }) 
        }
        return this.http.patch<User>('http://localhost:3000/user',{'current_jobs': jobs},httpOptions).subscribe(data => console.log(data))
    }

    removeJobFromUser(jobs: Job){
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt-key')
            }) 
        }
        return this.http.patch<User>('http://localhost:3000/user/removejob',{'current_jobs': jobs},httpOptions).subscribe(data => console.log(data))
    }

    addValueToUser(value:number){
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt-key')
            }) 
        }
        return this.http.patch<User>('http://localhost:3000/user',{'points': value},httpOptions).subscribe(data => console.log(data))
    }

    setUserProfileImage(image: Object){
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt-key')
            }) 
        }
        return this.http.patch<User>('http://localhost:3000/user',{'titleImageId': image},httpOptions).subscribe(data => console.log(data))
    }
}
