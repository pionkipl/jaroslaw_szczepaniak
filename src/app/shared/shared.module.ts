import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { ButtonComponent } from './component/button/button.component';
import { ButtonSmallComponent } from './component/button-small/button-small.component';
import { HeadingComponent } from './component/heading/heading.component';
import { SearchComponent } from './component/search/search.component';
import { TableViewComponent } from '../character/component/table-view/table-view.component';
import { AddCharacterComponent } from './component/add-character/add-character.component';
import { PaginationComponent } from './component/pagination/pagination.component';

@NgModule({
  declarations: [
    ButtonComponent,
    ButtonSmallComponent,
    HeadingComponent,
    SearchComponent,
    TableViewComponent,
    AddCharacterComponent,
    PaginationComponent
  ],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [
    ButtonComponent,
    ButtonSmallComponent,
    HeadingComponent,
    SearchComponent,
    TableViewComponent,
    AddCharacterComponent,
    PaginationComponent
  ]
})
export class SharedModule {}
