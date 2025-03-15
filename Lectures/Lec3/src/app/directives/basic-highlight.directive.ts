import { Directive, ElementRef, HostBinding, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]',
  standalone: false
})

export class BasicHighlightDirective {

  constructor(private element :ElementRef, private rerender: Renderer2) { 
   // this.element.nativeElement.style.backgroundColor="gray"
   //this.rerender.setStyle(this.element.nativeElement, "backgroundColor", "gray")
  }
@HostBinding('style.backgroundColor') backgroundColor :string;
@Input() defulatColor:string="white";
@Input() highlightColor:string="gray";

  @HostListener('mouseenter') mouseover(eventData:Event){
   // this.rerender.setStyle(this.element.nativeElement, "backgroundColor", "gray")
   //this.backgroundColor="gray"
   this.backgroundColor=this.highlightColor;

  }
  @HostListener('mouseleave') mouseleave(eventData:Event){
   // this.rerender.setStyle(this.element.nativeElement, "backgroundColor", "white")
  // this.backgroundColor="white"
  this.backgroundColor=this.defulatColor;

  }
}
