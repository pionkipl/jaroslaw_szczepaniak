import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CharacterModel } from '../model/character-model.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000';

  getCharacters() {
    return this.http.get<Array<CharacterModel>>(`${this.url}/characters`);
  }

  searchCharacterByQuery(characterSearchQuery: string) {
    return this.http.get<Array<CharacterModel>>(
      `${this.url}/characters/?q=${characterSearchQuery}`
    );
  }

  getSpecies() {
    return this.http.get(`${this.url}/species`);
  }
}
