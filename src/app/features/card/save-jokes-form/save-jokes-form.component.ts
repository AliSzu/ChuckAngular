import { Component, Input, OnInit } from '@angular/core';
import { FILE_NAME } from 'src/app/constants/jokes';
import { ChuckJokesService } from 'src/app/services/chuck-jokes.service';
import { prettifyJokesJSON } from 'src/utils/jokes-utils';

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

  constructor(private chuckJokesService: ChuckJokesService) {}

  ngOnInit(): void {
    this.setIsButtonDisabled();
  }

  public setJokesAmount(output: {
    jokesAmount: number;
    isAmountValid: boolean;
  }): void {
    this.jokesAmount = output.jokesAmount;
    this.isAmountValid = output.isAmountValid;

    this.setIsButtonDisabled();
  }

  private setIsButtonDisabled(): void {
    this.isButtonDisabled =
      this.jokesAmount < 1 || !this.isAmountValid || this.isLoading;
  }

  private createDownloadLink(jokes: string[]): void {
    const jokesJSON = prettifyJokesJSON(jokes);
    const blob = new Blob([jokesJSON], {
      type: 'text/plain',
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = FILE_NAME;
    link.href = url;
    link.click();
  }

  public downloadJokes(): void {
    let jokesArray: string[] = [];
    this.isLoading = true;
    this.chuckJokesService
      .downloadJokes(this.jokesAmount, this.name, this.category)
      .subscribe({
        next: (res) => {
          (jokesArray = res.map((joke) => joke.value)),
            this.createDownloadLink(jokesArray);
          this.isLoading = false;
        },
      });
  }
}
