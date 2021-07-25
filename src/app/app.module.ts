import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { HeaderComponent } from './components/header/header.component';
import { BlogViewComponent } from './components/blog-view/blog-view.component';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { SideNavComponent } from './components/side-nav/side-nav.component'

@NgModule({
  declarations: [
    AppComponent,
    BlogsComponent,
    HeaderComponent,
    BlogViewComponent,
    EditArticleComponent,
    HomeComponent,
    CourseComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
