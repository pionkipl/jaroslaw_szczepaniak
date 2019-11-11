import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { CharacterRoutingModule } from './character-routing.module';

import { CharacterListComponent } from './container/character-list/character-list.component';

@NgModule({
  declarations: [CharacterListComponent],
  imports: [CommonModule, CharacterRoutingModule, SharedModule],
  exports: [CharacterListComponent]
})
export class CharacterModule {}
