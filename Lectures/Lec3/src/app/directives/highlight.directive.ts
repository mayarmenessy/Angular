import { Directive, EventEmitter, HostBinding, HostListener, Input, Output } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: false
})
export class HighlightDirective {
@Input('highlighted') isHighlighted = false;
@Output() toggleHighlight = new EventEmitter();
  constructor() { 
    console.log("directive created")
  }
@HostBinding('class.highlighted')
get cssClass(){
  //return true;
return this.isHighlighted;
}
@HostListener('mouseover')
mouseOver(){
  this.isHighlighted = true;
  this.toggleHighlight.emit(this.isHighlighted);
}
@HostListener('mouseleave')
mouseLeave(){
  this.isHighlighted = false;
  this.toggleHighlight.emit(this.isHighlighted);

}
}
