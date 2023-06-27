import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './card/card.component';
import { InputFormComponent } from './input-form/input-form.component';
import { ImageComponent } from './image/image.component';

@NgModule({
  declarations: [AppComponent, CardComponent, InputFormComponent, ImageComponent],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
