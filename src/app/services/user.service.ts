import { Injectable } from '@angular/core';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  emails: string[] = ['toto@rra.al', 'toto2@rra.al'];

  constructor() { }

  isEmailTaken(email: string): Observable<boolean> {
    return of(this.emails.includes(email)).pipe(delay(3000));
  }
}
