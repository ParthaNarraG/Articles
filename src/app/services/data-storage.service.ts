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

  async getCourse(id:number){
    const response:any=await this.getArticles();
    response.map((ele:any,index:any)=>{
      ele.id===id?(this.articlesList.next(ele)):"";
    })
  }

  getArticles(){
    return new Promise((resolve,reject)=>{
      this.http.get(`${environment.webUrl}course.json`).subscribe(resolve,reject);
    })
  }

}
