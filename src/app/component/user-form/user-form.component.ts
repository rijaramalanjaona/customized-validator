import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {isDateValidator} from '../../validators/is-date-validator';

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
      ]
      ]
    });
  }

  get registerDate() {
    return this.userForm.get('registerDate');
  }

  submit() {
    console.log(this.userForm);
  }

}
