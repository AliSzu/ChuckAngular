import { Component, EventEmitter, Input, Output } from '@angular/core';
import { JokeError } from 'src/app/core/models/joke-error';

@Component({
  selector: 'app-alert-snackbar',
  templateUrl: './alert-snackbar.component.html',
  styleUrls: ['./alert-snackbar.component.scss']
})
export class AlertSnackbarComponent {
  @Output() public onCloseError = new EventEmitter<boolean>();
  @Input() public error = {} as JokeError

  public closeSnackbar(): void {
    this.onCloseError.emit(false)
  }

}
