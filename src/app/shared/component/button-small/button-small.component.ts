import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sl-button-small',
  templateUrl: './button-small.component.html',
  styleUrls: ['./button-small.component.scss']
})
export class ButtonSmallComponent implements OnInit {
  @Input()
  text: string;

  @Input()
  type: string;

  constructor() {}

  ngOnInit() {}

  buttonClicked() {
    console.log('Button clicled');
  }
}
