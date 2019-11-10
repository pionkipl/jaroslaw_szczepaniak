import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListViewComponent } from './list-view/list-view.component';
import { AddCharacterComponent } from './shared/component/add-character/add-character.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'listview',
    pathMatch: 'full'
  },
  {
    path: 'listview',
    component: ListViewComponent
  },
  {
    path: 'newcharacter',
    component: AddCharacterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
