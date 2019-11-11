import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListViewComponent } from './list-view/list-view.component';
import { AddCharacterComponent } from './shared/component/add-character/add-character.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'characters',
    pathMatch: 'full'
  },
  {
    path: 'characters',
    component: ListViewComponent
  },
  {
    path: 'characters/new',
    component: AddCharacterComponent
  },
  {
    path: 'characters/:id',
    component: AddCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
