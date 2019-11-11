import { Component, Input } from '@angular/core';
import { ButtonType } from '../../enum/button-type.enum';

@Component({
  selector: 'sl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {
  @Input()
  text: string;
  @Input()
  type: ButtonType;

  buttonType = ButtonType;

  constructor() {}
}
