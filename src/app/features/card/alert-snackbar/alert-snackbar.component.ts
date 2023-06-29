import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-alert-snackbar',
  templateUrl: './alert-snackbar.component.html',
  styleUrls: ['./alert-snackbar.component.scss']
})
export class AlertSnackbarComponent {
  @Input() public show = false
  @Input() public errorMessage = ''

  public handleCloseSnackbar(): void {
    this.show = false
  }

}
