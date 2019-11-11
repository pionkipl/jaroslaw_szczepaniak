import { Component, Input } from '@angular/core';

@Component({
  selector: 'sl-button-small',
  templateUrl: './button-small.component.html',
  styleUrls: ['./button-small.component.scss']
})
export class ButtonSmallComponent {
  @Input()
  text: string;

  @Input()
  type: string;

  constructor() {}
}
