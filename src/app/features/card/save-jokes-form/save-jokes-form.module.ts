import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SaveJokesFormComponent } from './save-jokes-form.component';
import { TranslateModule } from '@ngx-translate/core';
import { JokesAmountPickerComponent } from './features/jokes-amount-picker/jokes-amount-picker.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [SaveJokesFormComponent, JokesAmountPickerComponent],
  imports: [CommonModule, TranslateModule, FormsModule],
  exports: [SaveJokesFormComponent],
})
export class SaveJokesFormModule {}
