import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Job } from "../models/jobs.model";

const SERVER = 'http://localhost:3000/job';

@Injectable({
    providedIn: 'root'
})
export class JobService{
    constructor(private http: HttpClient){}

    createJob(job: Job){
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authentication': 'Bearer' + localStorage.getItem('jwt-key')
            }) 
        }
        return this.http.post<Job>(SERVER,job,httpOptions)
    }

    getJobs(){
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }) 
        }
    }

    getOneJob(){
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }) 
        }
    }

    deleteJob(){
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authentication': 'Bearer' + localStorage.getItem('jwt-key')
            }) 
        }
    }

    updateJob(){
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authentication': 'Bearer' + localStorage.getItem('jwt-key')
            }) 
        }
    }

}