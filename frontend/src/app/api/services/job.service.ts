import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Job, job_process } from "../models/jobs.model";

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
                'Authorization': 'Bearer ' + localStorage.getItem('jwt-key')
            }) 
        }
        return this.http.post<Job>(SERVER,job,httpOptions).subscribe((data) => {console.log(data)})
    }

    getJobs(status: job_process){
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            }),
            params:{
                status: status
            } 
        }
        return this.http.get<Job[]>(SERVER,httpOptions)
    }

    getOneJob(id:string){
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
            })  
        }
        return this.http.get<Job>(SERVER+'/'+id,httpOptions).subscribe(data => console.log(data))
    }


    deleteJob(id:string){
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt-key')
            }) 
        }
        this.http.delete<Job>(SERVER+'/'+id,httpOptions).subscribe(data=> console.log(data))
    }

    updateJob(id:string,job:Job){
        const httpOptions ={
            headers: new HttpHeaders({
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + localStorage.getItem('jwt-key')
            }) 
        }
       return this.http.patch<Job>(SERVER+'/'+id,job,httpOptions).subscribe(data => console.log(data))
    }

}