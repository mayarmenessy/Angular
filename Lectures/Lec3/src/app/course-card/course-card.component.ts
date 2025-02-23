import { Component, EventEmitter, Input, Output } from '@angular/core';
import{ICourse} from '../../../../models/course';
@Component({
  selector: 'app-course-card',
  standalone: false,
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent {
   @Input() course :ICourse ; //optional input property
   //  @Input({required:true}) course :ICourse ; //required input property
 @Output() courseSelected= new EventEmitter<ICourse>();
   onCourseViewed(){
    console.log('caed view course button clicked') 
    this.courseSelected.emit(this.course) 
   }

   cardClasses(){
    if(this.course.category=='BEGINNER'){
      return 'beginner'
    }
    return''
   }
}
