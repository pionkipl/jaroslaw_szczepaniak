import { Component, Input, OnInit } from '@angular/core';
import { ButtonType } from '../../enum/button-type.enum';

@Component({
  selector: 'sl-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input()
  text: string;
  @Input()
  type: ButtonType;

  buttonType = ButtonType;

  constructor() {}

  ngOnInit() {}
}
