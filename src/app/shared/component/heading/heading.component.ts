import { Component, Input } from '@angular/core';

@Component({
  selector: 'sl-heading',
  templateUrl: './heading.component.html',
  styleUrls: ['./heading.component.scss']
})
export class HeadingComponent {
  @Input()
  heading: string;

  constructor() {}
}
