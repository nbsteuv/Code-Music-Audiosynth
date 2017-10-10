import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {CodeMusic} from './codemusic/codemusic.component';
import {SoundSelector} from './sound-selector/sound-selector.component';

@NgModule({
  declarations: [
    AppComponent
    , CodeMusic
    , SoundSelector
  ],
  imports: [
    BrowserModule
    , FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
