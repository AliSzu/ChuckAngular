import { Component, Input } from '@angular/core';
import { JokeError } from 'src/app/core/models/joke-error';

@Component({
  selector: 'app-alert-snackbar',
  templateUrl: './alert-snackbar.component.html',
  styleUrls: ['./alert-snackbar.component.scss']
})
export class AlertSnackbarComponent {
  @Input() public error = {
    isPresent: false,
    message: ''
  } as JokeError

  public handleCloseSnackbar(): void {
    this.error.isPresent = false
  }

}
