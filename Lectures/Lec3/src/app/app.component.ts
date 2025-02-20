import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Lec3';
  serverElements:any=[{type:'server', name:'Server 1', content:'Server 1 content'}];


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
