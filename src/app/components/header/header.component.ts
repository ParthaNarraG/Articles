import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataStorageService } from 'src/app/services/data-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  heading="Create Article"
  constructor(private data:DataStorageService,private router:Router) { }

  ngOnInit(): void {
  }

  onClick(){
    // this.heading==="Back to Reading"?this.heading="Create Article":this.heading="Back to Reading"
    // this.data.edit.next(!this.data.edit.value);
    if(this.heading==="Back to Reading"){
      this.heading="Create Article";
      this.router.navigate(['/']);
    }
    else{
      this.heading="Back to Reading";
      this.router.navigate(['/edit']);
    }
  }

}
