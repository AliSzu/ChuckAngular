import { Component } from '@angular/core';
import { i18nService } from './services/i18n.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private i18Service: i18nService) {
    i18Service.initTranslations();
  }
}
