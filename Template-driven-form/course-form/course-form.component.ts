import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css']
})
export class CourseFormComponent {
  submit(f){
    console.log(f)
  }
  log(x) {console.log(x)}
  courseMethods= [
    {id :1, name : ''},
    {id :2, name : 'bootstrap'},
    {id :1, name : 'Angular'}
  ];
  

}
