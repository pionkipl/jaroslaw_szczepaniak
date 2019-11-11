import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router } from '@angular/router';

import { CharacterService } from 'src/app/character/service/character.service';

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
    private characterService: CharacterService,
    private router: Router
  ) {}

  ngOnInit() {
    this.addCharacterForm = this.fb.group({
      name: ['', Validators.required],
      species: ['', Validators.required],
      gender: ['', Validators.required],
      homeworld: ['']
    });

    this.getSpecies();
  }

  get getFormControl() {
    return this.addCharacterForm.controls;
  }

  checkIsControlRequired(controlName: string) {
    const formField = this.addCharacterForm.get(controlName);
    if (!formField.validator) {
      return false;
    }

    const validator = formField.validator({} as AbstractControl);
    return validator && validator.required;
  }

  getSpecies() {
    this.characterService.getSpecies().subscribe(speciesData => {
      this.species = speciesData;
    });
  }

  onSubmit() {
    this.submitted = true;

    if (this.addCharacterForm.invalid) {
      return;
    }

    this.addCharacter();
  }

  onReset() {
    this.submitted = false;
    this.addCharacterForm.reset();
  }

  addCharacter() {
    this.characterService
      .createCharacter(this.addCharacterForm.getRawValue())
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/characterlist']);
      });
  }
}
