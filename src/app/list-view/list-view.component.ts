import { Component, OnInit } from '@angular/core';

import { BehaviorSubject } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

import { CharacterModel } from '../character/model/character-model.interface';

import { CharacterService } from '../character/service/character.service';

import { ButtonType } from '../shared/enum/button-type.enum';

@Component({
  selector: 'sl-list-view',
  templateUrl: './list-view.component.html',
  styleUrls: ['./list-view.component.scss']
})
export class ListViewComponent implements OnInit {
  charactersData$: BehaviorSubject<Array<CharacterModel>>;
  setSearchQuery$: BehaviorSubject<string>;
  buttonType = ButtonType;

  private newSearchText$: BehaviorSubject<string>;

  constructor(public characterService: CharacterService) {}

  ngOnInit() {
    this.initProperties();
  }

  private initProperties() {
    this.charactersData$ = new BehaviorSubject(null);
    this.setSearchQuery$ = new BehaviorSubject('');
    this.newSearchText$ = new BehaviorSubject(null);

    this.newSearchText$
      .pipe(
        filter(searchText => searchText !== null),
        switchMap(searchQuery => {
          return this.characterService.searchCharacterByQuery(searchQuery);
        })
      )
      .subscribe(charactersData => {
        this.charactersData$.next(charactersData);
      });
  }

  performSearch(searchQuery: string) {
    this.newSearchText$.next(searchQuery);
  }

  deleteCharacterById(id: number) {
    if (window.confirm('Are you sure, you want do telete this character?')) {
      this.characterService.deleteCharacter(id).subscribe(() => {
        this.setSearchQuery$.next('');
      });
    }
  }
}
