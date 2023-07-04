import { Component, EventEmitter, Output } from '@angular/core';
import { MAX_DOWNLOAD_VALUE, MIN_DOWNLOAD_VALUE } from 'src/app/constants/jokes-value';

@Component({
  selector: 'app-jokes-amount-picker',
  templateUrl: './jokes-amount-picker.component.html',
  styleUrls: ['./jokes-amount-picker.component.scss'],
})
export class JokesAmountPickerComponent {
  @Output() onJokesChange = new EventEmitter<{ jokesAmount: number; isAmountValid: boolean }>();
  public jokesAmount = 0;
  public errorClass = '';
  private _isAmountValid = true;

  get isAmountValid() {
    return this._isAmountValid;
  }

  set isAmountValid(isValid: boolean) {
    this._isAmountValid = isValid;
    this.setErrorClass(!isValid);
  }

  public changeJokesAmount(value: number): void {
    this.isAmountValid =
      !(value > MAX_DOWNLOAD_VALUE || value < MIN_DOWNLOAD_VALUE)

    this.jokesAmount = value;
    this.onJokesChange.emit({
      jokesAmount: this.jokesAmount,
      isAmountValid: this.isAmountValid,
    });
  }

  private setErrorClass(isError: boolean) {
    this.errorClass = isError ? 'error' : '';
  }
}
