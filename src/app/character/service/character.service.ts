import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { CharacterModel } from '../model/character-model.interface';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };

  getCharacters() {
    return this.http.get<Array<CharacterModel>>(
      `${environment.endpoint}/characters`
    );
  }

  getCharacterById(id: number) {
    return this.http.get<CharacterModel>(
      `${environment.endpoint}/characters/${id}`
    );
  }

  createCharacter(character) {
    return this.http.post<CharacterModel>(
      `${environment.endpoint}/characters`,
      character,
      this.httpOptions
    );
  }

  updateCharacter(id, character) {
    return this.http.put<CharacterModel>(
      `${environment.endpoint}/characters/${id}`,
      character,
      this.httpOptions
    );
  }

  deleteCharacter(id: number) {
    return this.http.delete<CharacterModel>(
      `${environment.endpoint}/characters/${id}`,
      this.httpOptions
    );
  }

  searchCharacterByQuery(characterSearchQuery: string) {
    return this.http.get<Array<CharacterModel>>(
      `${environment.endpoint}/characters/?q=${characterSearchQuery}`
    );
  }

  getSpecies() {
    return this.http.get<Array<string>>(`${environment.endpoint}/species`);
  }
}
