import { Component, DoCheck, OnDestroy, OnInit } from '@angular/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { Job } from 'src/app/api/models/jobs.model';
import { User } from 'src/app/api/models/user.model';
import { ImageService } from 'src/app/api/services/image.service';
import { JobService } from 'src/app/api/services/job.service';
import { UserService } from 'src/app/api/services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit{
  public titleImageUrl: SafeUrl = ""
  public jobs: Job[] = []
  public username: string = ""
  public currency: number | undefined = 0

  constructor(private route: Router,
    private _UserService:UserService,
    private _JobService: JobService,
    private sanitizer: DomSanitizer,
    private _ImageService: ImageService) { }

  ngOnInit(): void {
    this._UserService.getUser().subscribe(data =>{
      console.log(data)
      this.username = data.username
      this.currency = data.points
      this.jobs = data.current_jobs
      if(data.titleImageId){
        this.getProfileImage(data.titleImageId)
      }else{
        this.titleImageUrl= "https://via.placeholder.com/150"
      }
    })
  }

  getProfileImage(id: any){
    this._ImageService.getImage(id['id'].toString()).subscribe( (data) =>  {this.convertIdToUrl(data)})
  }  

  convertIdToUrl(img: File){
    this.titleImageUrl = this.sanitizer.bypassSecurityTrustUrl(URL.createObjectURL(img))
  }

  CreateJob(){
    this.route.navigate(['/create-job'])
  }

  DeleteJob(row: number,id: string): void{
    this._JobService.deleteJob(id)
    this._UserService.addValueToUser(row)
    location.reload()
  }
  
  CancelJob(row:any,id: string): void{
    
    this._UserService.removeJobFromUser(row)
    location.reload()
  }

  uploadFile(evt: any){
    let file =evt[0]
    this.convertIdToUrl(file) 
       this._ImageService.uploadImage(file).subscribe((data)=> {
      this._UserService.setUserProfileImage(data);
    })
  }
}


