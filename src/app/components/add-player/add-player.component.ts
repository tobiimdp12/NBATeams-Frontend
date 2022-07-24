import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-player',
  templateUrl: './add-player.component.html',
  styleUrls: ['./add-player.component.css']
})
export class AddPlayerComponent implements OnInit {
  public addPlayerForm!: FormGroup;
  private teams : any;
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
      experience: new FormControl('', [
        Validators.required,
        Validators.pattern(this.onlyTextPattern),
      ]),
      position: new FormControl('', [
        Validators.required,
        Validators.maxLength(5),
        Validators.pattern(this.onlyTextPattern)
      ]),
      teamId: new FormControl(''),
      birthDate: new FormControl('', [
        Validators.required,
      ]),
      //Stats
      ppg: new FormControl('', [
        Validators.required,
        Validators.pattern(this.onlyNumberPattern),
      ]),
      rpg: new FormControl('', [
        Validators.required,
        Validators.pattern(this.onlyNumberPattern),
      ]),
      apg: new FormControl('', [
        Validators.required,
        Validators.pattern(this.onlyNumberPattern),
      ]),
      pie: new FormControl('', [
        Validators.required,
        Validators.pattern(this.onlyNumberPattern),
      ]),
      assists: new FormControl('', [
        Validators.required,
        Validators.pattern(this.onlyNumberPattern),
      ]),
      points: new FormControl('', [
        Validators.required,
        Validators.pattern(this.onlyNumberPattern),
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

  findInvalidControls() {
    const invalid = [];
    const controls = this.addPlayerForm.controls;
    for (const name in controls) {
        if (controls[name].invalid) {
            invalid.push(name);
        }
    }
    console.log(invalid);
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

  get experience() {
    return this.addPlayerForm.get('experience');
  }

  //Stats getters

  get ppg() {
    return this.addPlayerForm.get('ppg');
  }

  get rpg() {
    return this.addPlayerForm.get('rpg');
  }
  get apg() {
    return this.addPlayerForm.get('apg');
  }

  get pie() {
    return this.addPlayerForm.get('pie');
  }
  get assists() {
    return this.addPlayerForm.get('assists');
  }
  get points() {
    return this.addPlayerForm.get('points');
  }

  //#endregion
}
