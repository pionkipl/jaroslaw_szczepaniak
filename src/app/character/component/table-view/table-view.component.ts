import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

import { CharacterModel } from '../../model/character-model.interface';

import { ButtonAction } from 'src/app/shared/enum/button-action.enum';

@Component({
  selector: 'sl-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  @Input()
  characters$: Observable<Array<CharacterModel>>;

  @Output()
  deleteCharacter = new EventEmitter<number>();

  buttonAction = ButtonAction;

  constructor() {}

  ngOnInit() {}

  deleteCharacterById(id: number) {
    this.deleteCharacter.emit(id);
  }
}
