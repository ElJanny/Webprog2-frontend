import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const SERVER = 'http://localhost:3000/image';
@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  uploadImage(file: File){
    const httpOptions ={headers: new HttpHeaders({'Authorization': 'Bearer ' + localStorage.getItem('jwt-key')})}
    const formData = new FormData()
        formData.set('file', file)
        console.log(formData.getAll('path'))
        return this.http.post(SERVER, formData,httpOptions)
  }

  getImage(id: string){
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'Authorization': 'Bearer ' + localStorage.getItem('jwt-key')
  })

  return this.http.get<File>(SERVER + '/' + id, { headers: headers, responseType: 'blob' as 'json' })
  }
}
