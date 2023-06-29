import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ChuckJoke } from 'src/app/core/models/chuck-joke.model';
import { ChuckJokesService } from 'src/app/core/services/chuck-jokes.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  public customName = '';
  public chuckJoke = {} as ChuckJoke;
  public error = {} as HttpErrorResponse;

  constructor(private chuckJokesService: ChuckJokesService) {}

  ngOnInit(): void {
    this.onFetchJokes();
  }

  private onFetchJokes() {
    this.chuckJokesService.getRandomJoke(this.customName).subscribe({
      next: (res) => (this.chuckJoke = res),
      error: (e) => (this.error = e),
    });
  }

  public setCustomName(name: string) {
    this.customName = name;
    this.onFetchJokes();
  }

  public showSnackbar(): boolean {
    return JSON.stringify(this.error) !== '{}'
  }

  public getErrorMessage(): string {
    return this.error.status ? this.error.status + ' ' + this.error.error.error : ''
  }
}
