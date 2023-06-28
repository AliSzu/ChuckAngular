import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CardComponent } from './features/card/card.component';
import { ImageComponent } from './features/card/image/image.component';
import { InputFormComponent } from './features/card/input-form/input-form.component';

import { HttpClientModule} from '@angular/common/http';

@NgModule({
  declarations: [AppComponent, CardComponent, ImageComponent, InputFormComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
