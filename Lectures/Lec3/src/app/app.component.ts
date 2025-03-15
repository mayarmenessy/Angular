import { AfterViewInit, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { courses } from './Data/db-data';
import { ICourse } from '../../../models/course';
import { CourseCardComponent } from './course-card/course-card.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss',
  encapsulation:ViewEncapsulation.None // we removed the attribute
})
export class AppComponent implements OnInit, AfterViewInit{


  title = 'Lec3';

  //@ViewChild(CourseCardComponent) card :CourseCardComponent;
 // @ViewChild('cardRef') card :CourseCardComponent; //templet refrence variable
 @ViewChild('cardRef',{read:ElementRef}) card :ElementRef; //ElementRef mean access html element
@ViewChildren(CourseCardComponent,{read:ElementRef}) cards:QueryList<ElementRef>;
  serverElements:any=[{type:'server', name:'Server 1', content:'Server 1 content'}];
  courseOne=courses[0];
  coursess=courses;
  onCardClicked(course:ICourse){
    console.log('caed view course button clicked') 
    console.log(course.description)  
    console.log("card", this.card)
   }
onToggle(isHighlighted:boolean){
  console.log(isHighlighted)
}
   ngOnInit(): void {
    //console.log("card", this.card)
  }
  ngAfterViewInit(): void { //how to access the value of view child decorator ? we access it into lifecycle method ngAfterViewInit
    console.log("card", this.card)

  }

  onAddServer(serverData:{serverName:string, serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    })
    }
    onAddBlueprint(blueprintData:{serverName:string, serverContent:string}){
      this.serverElements.push({
        type:'server',
        name:blueprintData.serverName,
        content:blueprintData.serverContent    })
}}
