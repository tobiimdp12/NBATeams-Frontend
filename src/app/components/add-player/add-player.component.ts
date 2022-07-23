import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  public addPlayerForm!: FormGroup;
  constructor() {
    this.addPlayerForm = this.createForm();
  }

  private onlyTextPattern: any = /^[a-zA-Z]*$/;
  private onlyNumberPattern: any = /^[0-9]*$/;

  ngOnInit(): void {
  }
  createForm() {
    return new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.onlyTextPattern),
      ]),
      lastname: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.onlyTextPattern),
      ]),
      number: new FormControl('', [
        Validators.required,
        Validators.pattern(this.onlyNumberPattern),
      ]),
      weight: new FormControl('', [
        Validators.required,
        Validators.pattern(this.onlyNumberPattern),
      ]),
      height: new FormControl('', [
        Validators.required,
        Validators.pattern(this.onlyNumberPattern),
      ]),
      imageProfilePath: new FormControl('', [
      ]),
      position: new FormControl('', [
        Validators.required,
        Validators.maxLength(5)
      ]),
      teamId: new FormControl(''),
      birthDate: new FormControl('', [
        Validators.required,
      ]),
    });
  }

  onResetForm(): void {
    this.addPlayerForm.reset();
  }

  onSaveForm(): void {
    if (this.addPlayerForm.valid) {
      console.log(this.addPlayerForm.value);
      //TODO
      alert('message send successfully :)');
      this.onResetForm();
    }
  }

  //#region getters
  get name() {
    return this.addPlayerForm.get('name');
  }

  get lastname() {
    return this.addPlayerForm.get('lastname');
  }

  get number() {
    return this.addPlayerForm.get('number');
  }

  get weight() {
    return this.addPlayerForm.get('weight');
  }
  get height() {
    return this.addPlayerForm.get('height');
  }

  get imageProfilePath() {
    return this.addPlayerForm.get('imageProfilePath');
  }
  get position() {
    return this.addPlayerForm.get('position');
  }
  get birthDate() {
    return this.addPlayerForm.get('birthDate');
  }
  //#endregion
}
