import { Component } from '@angular/core';
import { courses } from './Data/db-data';
import { ICourse } from '../../../models/course';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lec3';
  serverElements:any=[{type:'server', name:'Server 1', content:'Server 1 content'}];
  courseOne=courses[0];
  coursess=courses;
  onCardClicked(course:ICourse){
    console.log('caed view course button clicked') 
    console.log(course.description)  
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
