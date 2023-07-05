import { Component, Input, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { ChuckJokesService } from 'src/app/services/chuck-jokes.service';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { createDownloadLink } from 'src/utils/jokes-utils';

@Component({
  selector: 'app-save-jokes-form',
  templateUrl: './save-jokes-form.component.html',
  styleUrls: ['./save-jokes-form.component.scss'],
})
export class SaveJokesFormComponent implements OnInit {
  @Input() category = '';
  @Input() name = '';
  public jokesAmount = 0;
  public isAmountValid = true;
  public isButtonDisabled = false;
  private _isLoading = false;

  get isLoading() {
    return this._isLoading;
  }

  set isLoading(value: boolean) {
    this._isLoading = value;

    this.setIsButtonDisabled();
  }

  constructor(
    private chuckJokesService: ChuckJokesService,
    private snackbarService: SnackbarService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.setIsButtonDisabled();
  }

  public setJokesAmount(data: {
    jokesAmount: number;
    isAmountValid: boolean;
  }): void {
    this.jokesAmount = data.jokesAmount;
    this.isAmountValid = data.isAmountValid;

    this.setIsButtonDisabled();
  }

  public downloadJokes(): void {
    let jokesArray: string[] = [];
    this.isLoading = true;
    this.chuckJokesService
      .downloadJokes(this.jokesAmount, this.name, this.category)
      .subscribe({
        next: (res) => {
          jokesArray = res.map((joke) => joke.value),
          createDownloadLink(jokesArray);
          this.isLoading = false;
        },
        error: (e) =>
          this.snackbarService.showSnackbar(
            this.getErrorMessage(e.status, e.error.error),
            e.status
          ),
      });
  }

  private setIsButtonDisabled(): void {
    this.isButtonDisabled =
      this.jokesAmount < 1 || !this.isAmountValid || this.isLoading;
  }

  private getErrorMessage(message?: string, status?: number): string {
    return message
      ? `${status} ${message}`
      : this.translate.instant('error.unknown');
  }
}
