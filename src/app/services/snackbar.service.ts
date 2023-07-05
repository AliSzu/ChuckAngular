import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JokeError } from '../core/models/joke-error';

@Injectable({
  providedIn: 'root',
})
export class SnackbarService {
  private snackbarSubject = new BehaviorSubject({
    isPresent: false,
    message: '',
    status: 0,
  } as JokeError);
  public snackbarState$ = this.snackbarSubject.asObservable();

  constructor() {}

  public showSnackbar(message: string, status: number): void {
    this.snackbarSubject.next({
      isPresent: true,
      message: message,
      status: status,
    });
  }

  public closeSnackbar(): void {
    this.snackbarSubject.next({
        isPresent: false,
        message: ' ',
        status: 0
    });
  }
}
