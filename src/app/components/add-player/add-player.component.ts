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
      ])

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
  //#endregion
}
