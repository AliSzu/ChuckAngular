import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CardComponent } from './card.component';
import { TranslateModule } from '@ngx-translate/core';
import { ImageComponent } from './image/image.component';
import { InputFormComponent } from './input-form/input-form.component';
import { LanguagePickerComponent } from 'src/app/language-picker/language-picker.component';
import { AlertSnackbarComponent } from '../../shared/components/alert-snackbar/alert-snackbar.component';
import { CategorySelectComponent } from './category-select/category-select.component';

@NgModule({
  declarations: [
    CardComponent,
    ImageComponent,
    InputFormComponent,
    LanguagePickerComponent,
    AlertSnackbarComponent,
    CategorySelectComponent
  ],
  imports: [BrowserModule, FormsModule, TranslateModule],
  exports: [CardComponent],
})
export class CardModule {}
