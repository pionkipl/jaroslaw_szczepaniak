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

  characterDetails = {
    name: '',
    species: '',
    gender: '',
    homeworld: ''
  };

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
      homeworld: [''],
      asterix: [null, Validators.required]
    });

    this.characterService.getSpecies().subscribe(speciesData => {
      this.species = speciesData;
    });
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

  onSubmit() {
    this.submitted = true;
    console.log(this.submitted);

    if (this.addCharacterForm.invalid) {
      return;
    }

    this.characterDetails = {
      name: this.getFormControl.name.value,
      species: this.getFormControl.species.value,
      gender: this.getFormControl.gender.value,
      homeworld: this.getFormControl.homeworld.value
    };

    this.addCharacter();
    this.addCharacterForm.reset();
  }

  onReset() {
    this.submitted = false;
    this.addCharacterForm.reset();
  }

  addCharacter() {
    this.characterService
      .createCharacter(this.characterDetails)
      .subscribe(data => {
        console.log(data);
        this.router.navigate(['/listview']);
      });
  }
}
