import {AbstractControl, ValidationErrors} from '@angular/forms';
import * as moment from 'moment';

export function isDateValidator(control: AbstractControl): ValidationErrors | null {
  return (control && control.value && !moment(control.value, 'YYYY-MM-DD', true).isValid()) ? {isDate: true} : null;
}
