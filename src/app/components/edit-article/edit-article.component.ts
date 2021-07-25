import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DataStorageService } from 'src/app/services/data-storage.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.scss']
})
export class EditArticleComponent implements OnInit {

  articles:any=[];
  constructor(private data:DataStorageService) { }

  ngOnInit(): void {
    this.data.articlesList.subscribe((data:any)=>{
      console.log(data);
      this.articles.push(...data);
    })
  }


  /**
   * @description adding an article to the database
   * @param ngForm 
   * @returns a promise either a success or failure
   */

/*   async addArticle(ngForm:NgForm){
    this.articles.push(ngForm.value)
    console.log(this.articles);
    try{
      const resBody:any=await this.data.createArticle(this.articles);
      Swal.fire({
        text:"Article added Successfully",
        icon:'success'
      })
    }
    catch(error:any){
      console.log(error);
    }
  } */
}
