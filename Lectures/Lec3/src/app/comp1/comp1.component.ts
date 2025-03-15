import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-comp1',
  standalone: false,
  templateUrl: './comp1.component.html',
  styleUrl: './comp1.component.scss',
  encapsulation:ViewEncapsulation.ShadowDom // so the component do not take the style of parent
})
export class Comp1Component {

}
