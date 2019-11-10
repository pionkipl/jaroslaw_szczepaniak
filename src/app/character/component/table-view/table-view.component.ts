import { Component, OnInit, Input } from '@angular/core';

import { CharacterModel } from 'src/app/character/model/character-model.interface';
import { ButtonAction } from 'src/app/shared/enum/button-action.enum';

@Component({
  selector: 'sl-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  @Input()
  characters: Array<CharacterModel>;

  buttonAction = ButtonAction;

  constructor() {}

  ngOnInit() {}
}
