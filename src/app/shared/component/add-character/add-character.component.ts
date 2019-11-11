import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { switchMap, map, filter } from 'rxjs/operators';

import { CharacterService } from 'src/app/character/service/character.service';

@Component({
  selector: 'sl-add-character',
  templateUrl: './add-character.component.html',
  styleUrls: ['./add-character.component.scss']
})
export class AddCharacterComponent implements OnInit {
  addCharacterForm: FormGroup;
  submitted = false;
  isEditMode = false;
  editedId = 0;
  isCommunicationWithServerInProgress = false;

  species: Array<string>;

  constructor(
    private fb: FormBuilder,
    private characterService: CharacterService,
    private router: Router,
    private activatedRoute: ActivatedRoute
  ) {}

  ngOnInit() {
    this.initForm();

    this.getSpecies();

    this.activatedRoute.paramMap
      .pipe(
        map(data => data.get('id')),
        filter(id => !!id),
        map(id => Number.parseInt(id, 10)),
        switchMap(id => {
          return this.characterService.getCharacterById(id);
        })
      )
      .subscribe(userResponse => {
        this.isEditMode = true;
        this.editedId = userResponse.id;
        this.addCharacterForm.patchValue(userResponse);
      });
  }

  get getFormControl() {
    return this.addCharacterForm.controls;
  }

  private initForm() {
    this.addCharacterForm = this.fb.group({
      name: ['', Validators.required],
      species: ['', Validators.required],
      gender: ['', Validators.required],
      homeworld: ['']
    });
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

    if (this.isEditMode) {
      this.editCharacter();
    } else {
      this.addCharacter();
    }
  }

  onReset() {
    this.submitted = false;
    this.addCharacterForm.reset();
  }

  navigateToCharacterList() {
    this.router.navigate(['/characters']);
  }

  addCharacter() {
    this.isCommunicationWithServerInProgress = true;
    this.characterService
      .createCharacter(this.addCharacterForm.getRawValue())
      .subscribe(() => {
        this.navigateToCharacterList();
      });
  }

  editCharacter() {
    this.isCommunicationWithServerInProgress = true;
    this.characterService
      .updateCharacter(this.editedId, this.addCharacterForm.getRawValue())
      .subscribe(() => {
        this.navigateToCharacterList();
      });
  }
}
