import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CharacterModel } from '../model/character-model.interface';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) {}
  url = 'http://localhost:3000';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getCharacters() {
    return this.http.get<Array<CharacterModel>>(`${this.url}/characters`);
  }

  createCharacter(character) {
    return this.http.post<CharacterModel>(
      `${this.url}/characters`,
      JSON.stringify(character),
      this.httpOptions
    );
  }

  updateCharacter(id, character) {
    return this.http.put<CharacterModel>(
      `${this.url}/characters/${id}`,
      JSON.stringify(character),
      this.httpOptions
    );
  }

  deleteCharacter(id) {
    return this.http.delete<CharacterModel>(
      `${this.url}/characters/${id}`,
      this.httpOptions
    );
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
