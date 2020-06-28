import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isDateValidator} from '../../validators/is-date-validator';
import {isProfessionalEmailValidator} from '../../validators/is-professional-email-validator';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  userForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.userForm = this.fb.group({
        registerDate: ['', [
          Validators.required,
          isDateValidator
        ]],
        name: ['', [
          Validators.required,
          Validators.minLength(4),
          Validators.maxLength(20),
          Validators.pattern('^[a-zA-Z0-9_-]*$')
        ]],
        email: ['', [
          Validators.required,
          Validators.email
        ]]
      },
      {validators: isProfessionalEmailValidator}
    );
  }

  get registerDate() {
    return this.userForm.get('registerDate');
  }

  get name() {
    return this.userForm.get('name');
  }

  get email() {
    return this.userForm.get('email');
  }

  submit() {
    console.log(this.registerDate.value + ' - ' + this.name.value + ' - ' + this.email.value);
  }

}
