import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoursesComponent } from './courses.component';
import { CourseComponent } from './course/course.component';
import { CourseService } from './courses.service';
import { FormsModule } from '@angular/forms';
import { FavoriteComponent } from './favorite/favorite.component';
import { LikesComponent } from './likes/likes.component'

@NgModule({
  declarations: [
    AppComponent,
    CoursesComponent,
    CourseComponent,
    FavoriteComponent,
    LikesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [CourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
