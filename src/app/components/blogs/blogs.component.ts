import { Component, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  edit: boolean = false;
  details: any = [];

  constructor(private data: DataStorageService) { }
  ngOnInit(): void {
    this.getArticles();
  }

  /**
 * @description getting the articles from the database
 * @returns a promise a success or a failure
 */

  async getArticles() {
    try {
      const resBody: any = await this.data.getArticles();
      this.details = resBody;
      this.data.articlesList.next(resBody);
    }
    catch(error:any){
      console.log(error);
    }
  }
}
