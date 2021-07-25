import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogsComponent } from './components/blogs/blogs.component';
import { CourseComponent } from './components/course/course.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'course/:id',
    component:CourseComponent
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
