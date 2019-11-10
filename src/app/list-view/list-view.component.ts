import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { switchMap } from 'rxjs/operators';

import { CharacterModel } from '../character/model/character-model.interface';

import { CharacterService } from '../character/service/character.service';

import { ButtonType } from '../shared/enum/button-type.enum';

@Component({
  selector: 'sl-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  characterData: Array<CharacterModel>;
  buttonType = ButtonType;

  private queryForNewData: BehaviorSubject<string>;

  constructor(public characterService: CharacterService) {}

  ngOnInit() {
    this.initProperties();
  }

  private initProperties() {
    this.queryForNewData = new BehaviorSubject('');

    this.queryForNewData
      .asObservable()
      .pipe(
        switchMap(searchQuery => {
          return this.characterService.searchCharacterByQuery(searchQuery);
        })
      )
      .subscribe(charactersData => {
        this.characterData = charactersData;
      });
  }

  performSearch(searchQuery: string) {
    this.queryForNewData.next(searchQuery);
  }
}
