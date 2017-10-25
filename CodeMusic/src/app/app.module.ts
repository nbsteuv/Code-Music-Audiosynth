import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {NavBar} from './navbar/navbar.component';
import {Home} from './home/home.component';
import {ErrorNotFound} from './error-not-found/error-not-found.component';
import {CodeMusic} from './codemusic/codemusic.component';
import {FunctionInstructionsTable} from './function-instructions-table/function-instructions-table.component';
import {SoundSelector} from './sound-selector/sound-selector.component';
import {FunctionBuilder} from './function-builder/function-builder.component';
import {FunctionTypeSelector} from './function-type-selector/function-type-selector.component';
import {FunctionNoteSelector} from './function-note-selector/function-note-selector.component';
import {FunctionSecondsSelector} from './function-seconds-selector/function-seconds-selector.component';
import {FunctionDisplay} from './function-display/function-display.component';
import {AttributionList} from './attribution-list/attribution-list.component';

@NgModule({
  declarations: [
    AppComponent
    , NavBar
    , Home
    , ErrorNotFound
    , CodeMusic
    , FunctionInstructionsTable
    , SoundSelector
    , FunctionBuilder
    , FunctionTypeSelector
    , FunctionNoteSelector
    , FunctionSecondsSelector
    , FunctionDisplay
    , AttributionList
  ],
  imports: [
    BrowserModule
    , FormsModule
    , AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
