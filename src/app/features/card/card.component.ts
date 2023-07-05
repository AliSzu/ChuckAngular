import { Component, OnInit } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { TranslateService } from '@ngx-translate/core';
import { ChuckJoke } from 'src/app/core/models/chuck-joke.model';
import { JokeError } from 'src/app/core/models/joke-error';
import { ChuckJokesService } from 'src/app/services/chuck-jokes.service';
import { SnackbarService } from 'src/app/services/snackbar.service';

@UntilDestroy()
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public customName = '';
  public downloadName = '';
  public chuckJoke = {} as ChuckJoke;
  public error = {} as JokeError;
  public category = '';

  constructor(
    private chuckJokesService: ChuckJokesService,
    private translate: TranslateService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.onFetchJokes();
  }

  public setCustomName(name: string): void {
    this.customName = name;
    this.onFetchJokes();
  }

  public setDownloadName(name: string): void {
    this.downloadName = name;
  }

  public setCategory(category: string): void {
    this.category = category;
  }

  private onFetchJokes() {
    this.chuckJokesService
      .getRandomJoke(this.customName, this.category)
      .subscribe({
        next: (res) => (this.chuckJoke = res),
        error: (e) =>
          this.snackbarService.showSnackbar(
            this.getErrorMessage(e.status, e.error.error),
            e.status
          ),
      });
  }

  private getErrorMessage(message?: string, status?: number): string {
    return message
      ? `${status} ${message}`
      : this.translate.instant('error.unknown');
  }
}
