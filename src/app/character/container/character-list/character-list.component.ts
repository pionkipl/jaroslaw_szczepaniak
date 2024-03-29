import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { BehaviorSubject } from 'rxjs';
import { switchMap, filter } from 'rxjs/operators';

import { CharacterModel } from '../../model/character-model.interface';

import { CharacterService } from '../../service/character.service';

import { ButtonType } from '../../../shared/enum/button-type.enum';

@Component({
  selector: 'sl-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.scss']
})
export class CharacterListComponent implements OnInit {
  charactersData$: BehaviorSubject<Array<CharacterModel>>;
  setSearchQuery$: BehaviorSubject<string>;
  buttonType = ButtonType;

  private newSearchText$: BehaviorSubject<string>;

  constructor(
    public characterService: CharacterService,
    private router: Router
  ) {}

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
        if (charactersData.length < 1) {
          window.alert('No Results Found.');
        }
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

  editCharacterById(id: number) {
    this.router.navigate([`/characters/${id}`]);
  }
}
