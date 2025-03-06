import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-course-image',
  standalone: false,
  templateUrl: './course-image.component.html',
  styleUrl: './course-image.component.scss'
})
export class CourseImageComponent {
@Input()ImageUrl:String;
}
