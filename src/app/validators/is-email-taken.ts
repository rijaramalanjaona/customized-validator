import {AbstractControl, AsyncValidatorFn, ValidationErrors} from '@angular/forms';
import {Observable} from 'rxjs';
import {UserService} from '../services/user.service';
import {catchError, map} from 'rxjs/operators';

export class IsEmailTaken {
  static validate(userService: UserService): AsyncValidatorFn {
    return (ctrl: AbstractControl): Observable<ValidationErrors> => {
      return userService.isEmailTaken(ctrl.value)
        .pipe(
          map(isTaken => (isTaken ? { isEmailTaken: true } : null)),
          catchError(() => null)
        );
    };
  }
}
