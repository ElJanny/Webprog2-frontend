import { Job } from "./jobs.model";

export interface User{
    id?:number
    username: string
    password: string
    points?: number
    current_jobs: Job[]
    jobs_done?: number
}