import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { ImageComponent } from '../image/image.component';
import { InputFormComponent } from '../input-form/input-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { LanguagePickerComponent } from '../language-picker/language-picker.component';

@NgModule({
  declarations: [CardComponent, ImageComponent, InputFormComponent, LanguagePickerComponent],
  imports: [BrowserModule, FormsModule, TranslateModule],
  exports: [CardComponent],
})
export class CardModule {}
