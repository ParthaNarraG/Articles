import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';

const routes: Routes = [
  {
    path:'',
    component:BlogsComponent
  },
  {
    path:'edit',
    component:EditArticleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
