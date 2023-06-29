import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-language-picker',
  templateUrl: './language-picker.component.html',
  styleUrls: ['./language-picker.component.scss'],
})
export class LanguagePickerComponent{
  public availableLanguages = this.translate.getLangs();
  
  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'pl']);
  }

  public onLanguageChange(language: string): void {
    this.translate.use(language)
  }
}
