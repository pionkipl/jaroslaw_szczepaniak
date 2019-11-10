import { Component, OnInit, Input } from '@angular/core';
import { CharacterModel } from 'src/app/character/model/character-model.interface';

@Component({
  selector: 'sl-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent implements OnInit {
  @Input()
  characters: Array<CharacterModel>;
  constructor() {}

  ngOnInit() {}
}
