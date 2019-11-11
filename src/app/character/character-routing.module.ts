import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CharacterListComponent } from './container/character-list/character-list.component';
import { AddCharacterComponent } from '../shared/component/add-character/add-character.component';

const routes: Routes = [
  {
    path: '',
    component: CharacterListComponent
  },
  {
    path: 'new',
    component: AddCharacterComponent
  },
  {
    path: ':id',
    component: AddCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacterRoutingModule {}
