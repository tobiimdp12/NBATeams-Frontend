import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { contactService } from 'src/app/services/contactService';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  public contactForm!: FormGroup;

  // tslint:disable-next-line: max-line-length
  private emailPattern: any =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  private onlyTextPattern: any = /^[a-zA-Z]*$/;

  constructor(private contactService: contactService) {
    this.contactForm = this.createForm();
  }

  get name() {
    return this.contactForm.get('name');
  }

  get subject() {
    return this.contactForm.get('subject');
  }
  get from() {
    return this.contactForm.get('from');
  }
  get body() {
    return this.contactForm.get('body');
  }

  createForm() {
    return new FormGroup({
      from: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.emailPattern),
      ]),
      name: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern(this.onlyTextPattern),
      ]),
      subject: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),

      body: new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(100),
      ]),
    });
  }

  onResetForm(): void {
    this.contactForm.reset();
  }

  onSaveForm(): void {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      this.contactService.updateData(this.contactForm.value).subscribe({
        //next (paso exitoso)
        next: (result) => console.log(result),
        //nombre | (nombre) | () => { line1; line2 }
        //error (paso erroneo)
        error: (error) => console.log(error),
        //complete (paso sí o sí)
        complete: () => console.log('complete'),
      });
      alert('message send successfully :)');
      this.onResetForm();
    }
  }
}
