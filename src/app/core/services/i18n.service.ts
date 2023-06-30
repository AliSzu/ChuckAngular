import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root',
})
export class i18nService {
  constructor(private translate: TranslateService) {}

  public initTranslations(): void {
    this.translate.setDefaultLang('en');
    this.translate.use('en');
  }
}
