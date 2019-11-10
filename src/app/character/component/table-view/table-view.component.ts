import { Component, OnInit, Input } from '@angular/core';

import { CharacterService } from '../../service/character.service';

import { CharacterModel } from '../../model/character-model.interface';

import { ButtonAction } from 'src/app/shared/enum/button-action.enum';
import { Observable } from 'rxjs';

@Component({
  selector: 'sl-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  @Input()
  characters: Array<CharacterModel> = [];

  buttonAction = ButtonAction;

  constructor(private characterService: CharacterService) {}

  ngOnInit() {
    this.getCharacters();
  }

  getCharacters() {
    return this.characterService.getCharacters().subscribe(characters => {
      this.characters = characters;
    });
  }

  deleteCharacter(id) {
    if (window.confirm('Are you sure, you want do telete this character?')) {
      this.characterService.deleteCharacter(id).subscribe(() => {
        this.getCharacters();
      });
    }
  }
}
