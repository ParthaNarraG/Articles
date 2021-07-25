import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.scss']
})
export class CourseComponent implements OnInit {

  courseDetails:any=[]
  id:number=0;
  constructor(private activatedRoute:ActivatedRoute,private dataStorage:DataStorageService) {
    this.dataStorage.articlesList.subscribe((data:any)=>{
      this.courseDetails=data.contents;
    })
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: any) => {
      this.id = +params['id'];
      this.dataStorage.getCourse(this.id);
    }) 
  }


}
