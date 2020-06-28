import {FormGroup, ValidationErrors, ValidatorFn} from '@angular/forms';

// cross validator sur les champs name et email
export const isProfessionalEmailValidator: ValidatorFn = (control: FormGroup): ValidationErrors | null => {
  const name = control.get('name');
  const email = control.get('email');

  return name && email && !email.value.includes(name.value) ? { isProfessionalEmail: true } : null;
};
