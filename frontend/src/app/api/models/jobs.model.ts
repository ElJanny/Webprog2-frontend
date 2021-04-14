export interface Job{
    id?:number
    title: string
    description: string
    value: number
    process: job_process
}


export enum job_process{
    DONE = "done",
    FREE = "free",
    UNDER_WORKING = "under_working"
}