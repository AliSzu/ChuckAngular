import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { TranslateModule } from '@ngx-translate/core';
import { ImageComponent } from './image/image.component';
import { InputFormComponent } from './input-form/input-form.component';
import { LanguagePickerComponent } from 'src/app/language-picker/language-picker.component';
import { AlertSnackbarComponent } from './alert-snackbar/alert-snackbar.component';

@NgModule({
  declarations: [CardComponent, ImageComponent, InputFormComponent, LanguagePickerComponent, AlertSnackbarComponent],
  imports: [BrowserModule, FormsModule, TranslateModule],
  exports: [CardComponent],
})
export class CardModule {}
