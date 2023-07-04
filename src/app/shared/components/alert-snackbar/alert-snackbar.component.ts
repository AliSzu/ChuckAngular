import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { JokeError } from 'src/app/core/models/joke-error';
import { SnackbarService } from 'src/app/services/snackbar.service';

@UntilDestroy()
@Component({
  selector: 'app-alert-snackbar',
  templateUrl: './alert-snackbar.component.html',
  styleUrls: ['./alert-snackbar.component.scss'],
})
export class AlertSnackbarComponent implements OnInit {
  public error = {} as JokeError;

  constructor(
    private snackbarService: SnackbarService,
    private translate: TranslateService
  ) {
    this.translate.onLangChange
      .pipe(untilDestroyed(this))
      .subscribe(() =>
        this.setUnknownErrorMessage(this.translate.instant('error.unknown'))
      );
  }

  ngOnInit(): void {
    this.snackbarService.snackbarState
      .pipe(untilDestroyed(this))
      .subscribe((state) => {
        this.error = state;
        setTimeout(() => {
          this.error.isPresent = false;
        }, 5000);
      });
  }

  public closeSnackbar(): void {
    this.snackbarService.closeSnackbar();
  }

  private setUnknownErrorMessage(value: string): void {
    if (this.error.isPresent && this.error.status === 0) {
      this.error.message = value;
    }
  }
}
