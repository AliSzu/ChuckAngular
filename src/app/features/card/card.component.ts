import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ChuckJoke } from 'src/app/core/models/chuck-joke.model';
import { ChuckJokesService } from 'src/app/core/services/chuck-jokes.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  customName = '';
  chuckJoke = {} as ChuckJoke

  constructor(private chuckJokesService : ChuckJokesService) {}

  ngOnInit(): void {
    this.onFetchJokes();
  }

  onFetchJokes() {
    this.chuckJokesService.getRandomJoke(this.customName).subscribe(res => this.chuckJoke = res)
  }

  setCustomName(name: string) {
    this.customName = name;
    this.onFetchJokes();
  }
}
