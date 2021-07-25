import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  courseList:any=[];
  constructor(private dataStorage:DataStorageService,private router:Router) {

  }

  ngOnInit(): void {
    this.getCourses();
  }

  /**
   * @description this method used to fetch all the courses list
   * @params no params required
   * @returns a promise 
   */

  async getCourses(){
    const response:any=await this.dataStorage.getArticles();
    this.courseList=response;
    console.log(response);
    this.dataStorage.articlesList.next(response);
  }

  onCourseClick(course:any){
    this.courseList.map((ele:any,index:number)=>{
      ele.id===course.id?(this.dataStorage.articlesList.next(ele)):"";
    })
    this.router.navigate([`course/${course.id}`])
  }

}
