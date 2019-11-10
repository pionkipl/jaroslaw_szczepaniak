import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CharacterService } from 'src/app/character/service/character.service';
import { trimTrailingNulls } from '@angular/compiler/src/render3/view/util';

@Component({
  selector: 'sl-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit {
  addCharacterForm: FormGroup;
  submitted = false;

  species;

  constructor(
    private fb: FormBuilder,
    private characterService: CharacterService
  ) {}

  ngOnInit() {
    this.addCharacterForm = this.fb.group({
      name: ['', Validators.required],
      species: ['', Validators.required],
      gender: ['', Validators.required],
      homeworld: ['']
    });

    this.characterService.getSpecies().subscribe(speciesData => {
      this.species = speciesData;
    });
  }

  get f() {
    return this.addCharacterForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);

    if (this.addCharacterForm.invalid) {
      return;
    }
  }

  onReset() {
    this.submitted = false;
    this.addCharacterForm.reset();
  }
}
