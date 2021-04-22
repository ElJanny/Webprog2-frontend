import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { JobsService } from '../jobs.service';

@Component({
  selector: 'app-job-create',
  templateUrl: './job-create.component.html',
  styleUrls: ['./job-create.component.css']
})
export class JobCreateComponent implements OnInit {

  public title: string =""
  public description: string = ""
  public value: number = 0
  constructor(private _JobsService: JobsService,private router: Router) { }

  ngOnInit(): void {
  }

  createJob(){
    if(this.title!== "" && this.value>0 && this.description!==""){
      this._JobsService.createJob({title: this.title,description: this.description,value:this.value})
      this.router.navigate(['/jobs'])
    }

}
}
