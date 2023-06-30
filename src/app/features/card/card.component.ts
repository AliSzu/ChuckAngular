import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { ChuckJoke } from 'src/app/core/models/chuck-joke.model';
import { JokeError } from 'src/app/core/models/joke-error';
import { ChuckJokesService } from 'src/app/core/services/chuck-jokes.service';

@UntilDestroy()
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public customName = '';
  public chuckJoke = {} as ChuckJoke;
  public error = {} as JokeError;

  constructor(
    private chuckJokesService: ChuckJokesService,
    private translate: TranslateService
  ) {}

  ngOnInit(): void {
    this.onFetchJokes();

    this.translate.onLangChange
      .pipe(untilDestroyed(this))
      .subscribe(() =>
        this.setUnknownErrorMessage(this.translate.instant('error.unknown'))
      );
  }

  public setCustomName(name: string): void {
    this.customName = name;
    this.onFetchJokes();
  }

  public changeError(value: boolean): void {
    this.error.isPresent = value;
  }

  private setUnknownErrorMessage(value: string): void {
    if (this.error.isPresent && this.error.status === 0) {
      this.error.message = value;
    }
  }

  private onFetchJokes() {
    this.chuckJokesService.getRandomJoke(this.customName).subscribe({
      next: (res) => ((this.chuckJoke = res), this.setError(false, '', 0)),
      error: (e) =>
        this.setError(
          true,
          this.getErrorMessage(e.status, e.error.error),
          e.status
        ),
    });
  }

  private getErrorMessage(message?: string, status?: number): string {
    return message
      ? status + ' ' + message
      : this.translate.instant('error.unknown');
  }

  private setError(isPresent: boolean, message: string, status: number): void {
    this.error = {
      isPresent: isPresent,
      message: message,
      status: status,
    };
  }
}
