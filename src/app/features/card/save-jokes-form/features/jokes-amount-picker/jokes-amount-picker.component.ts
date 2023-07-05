import { Component, EventEmitter, Output } from '@angular/core';
import {
  MAX_DOWNLOAD_VALUE,
  MIN_DOWNLOAD_VALUE,
} from 'src/app/constants/jokes-value';

@Component({
  selector: 'app-jokes-amount-picker',
  templateUrl: './jokes-amount-picker.component.html',
  styleUrls: ['./jokes-amount-picker.component.scss'],
})
export class JokesAmountPickerComponent {
  @Output() onJokesChange = new EventEmitter<{
    jokesAmount: number;
    isAmountValid: boolean;
  }>();
  private _jokesAmount = 0;
  public errorClass = '';
  public isAmountValid = true;

  get jokesAmount() {
    return this._jokesAmount;
  }

  set jokesAmount(value: number) {
    this.isAmountValid = !(
      value > MAX_DOWNLOAD_VALUE || value < MIN_DOWNLOAD_VALUE
    );

    this._jokesAmount = !value ? 0 : value;
    this.onJokesChange.emit({
      jokesAmount: this.jokesAmount,
      isAmountValid: this.isAmountValid,
    });
  }

  public changeJokesAmount(value: number): void {
    this.jokesAmount = value;
  }
}
