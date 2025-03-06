import { AfterContentInit, AfterViewInit, Component, ContentChild, ContentChildren, ElementRef, EventEmitter, Input, Output, QueryList } from '@angular/core';
import{ICourse} from '../../../../models/course';
import { CourseImageComponent } from '../course-image/course-image.component';
@Component({
  selector: 'app-course-card',
  standalone: false,
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements AfterViewInit, AfterContentInit {
   @Input() course :ICourse ; //optional input property
   //  @Input({required:true}) course :ICourse ; //required input property
 @Output() courseSelected= new EventEmitter<ICourse>();
 //@ContentChild(CourseImageComponent) image:any;
 @ContentChildren(CourseImageComponent) images :QueryList<ElementRef>;

   onCourseViewed(){
    console.log('caed view course button clicked') 
    this.courseSelected.emit(this.course) 
   }
ngAfterViewInit(): void {
}
ngAfterContentInit(): void {
  console.log('image', this.images);
}
   cardClasses(){
    if(this.course.category=='BEGINNER'){
      return 'beginner'
    }
    return''
   }
}
