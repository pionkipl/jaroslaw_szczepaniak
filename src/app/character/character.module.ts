import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharacterListComponent } from './container/character-list/character-list.component';
import { SharedModule } from '../shared/shared.module';
import { CharacterRoutingModule } from './character-routing.module';

@NgModule({
  declarations: [CharacterListComponent],
  imports: [CommonModule, CharacterRoutingModule, SharedModule],
  exports: [CharacterListComponent]
})
export class CharacterModule {}
