import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]',
  standalone: false
})
export class HoverHighlightDirective {

  constructor(private el: ElementRef) { }
@HostListener('mouseenter') onMouseEnter(){
  this.el.nativeElement.style.backgroundColor='gray';
}
@HostListener('mouseleave') onMouseLeave(){
  this.el.nativeElement.style.backgroundColor='white';
}
}
