import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataStorageService {

  articlesList=new BehaviorSubject<any>([]);

  constructor(private http:HttpClient) { }

  createArticle(data:any){
    return new Promise((resolve,reject)=>{
      this.http.put(`${environment.webUrl}details.json`,data).subscribe(resolve,reject);
    })
  }

  getArticles(){
    return new Promise((resolve,reject)=>{
      this.http.get(`${environment.webUrl}details.json`).subscribe(resolve,reject);
    })
  }

}
