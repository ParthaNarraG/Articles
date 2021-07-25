import { Component, Input, OnInit } from '@angular/core';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss']
})
export class BlogViewComponent implements OnInit {
  @Input() details:any;
  constructor(private data:DataStorageService) { }

  ngOnInit(): void {
  }
}
