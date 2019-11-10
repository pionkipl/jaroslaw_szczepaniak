import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { debounceTime } from 'rxjs/operators';
import { CharacterModel } from 'src/app/character/model/character-model.interface';

@Component({
  selector: 'sl-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output()
  searchQueried = new EventEmitter<string>();

  searchForm: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.initForm();
    this.initProperties();
  }

  private initForm() {
    this.searchForm = this.fb.group({
      searchQuery: ['']
    });
  }

  private initProperties() {
    this.searchForm
      .get('searchQuery')
      .valueChanges.pipe(debounceTime(200))
      .subscribe(searchQuery => {
        this.searchQueried.emit(searchQuery);
      });
  }
}
