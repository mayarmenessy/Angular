import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appTextColor]',
  standalone: false
})
export class TextColorDirective implements OnInit {
  @Input('appTextColor') textColor!: string;
  constructor(private el: ElementRef) { }
  ngOnInit() {
    this.el.nativeElement.style.color = this.textColor || 'blck';
  }
}
