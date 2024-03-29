import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Observable } from 'rxjs';

import { CharacterModel } from '../../model/character-model.interface';

import { ButtonAction } from 'src/app/shared/enum/button-action.enum';

@Component({
  selector: 'sl-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent {
  @Input()
  characters$: Observable<Array<CharacterModel>>;

  @Output()
  deleteCharacter = new EventEmitter<number>();

  @Output()
  editCharacter = new EventEmitter<number>();

  buttonAction = ButtonAction;

  constructor() {}

  deleteCharacterById(id: number) {
    this.deleteCharacter.emit(id);
  }

  editCharacterById(id: number) {
    this.editCharacter.emit(id);
  }
}
