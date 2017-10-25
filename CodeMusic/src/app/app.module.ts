import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app.routing';
import {AppComponent} from './app.component';
import {NavBarComponent} from './navbar/navbar.component';
import {HomeComponent} from './home/home.component';
import {ErrorNotFoundComponent} from './error-not-found/error-not-found.component';
import {CodeMusicComponent} from './codemusic/codemusic.component';
import {FunctionInstructionsTableComponent} from './function-instructions-table/function-instructions-table.component';
import {SoundSelectorComponent} from './sound-selector/sound-selector.component';
import {FunctionBuilderComponent} from './function-builder/function-builder.component';
import {FunctionTypeSelectorComponent} from './function-type-selector/function-type-selector.component';
import {FunctionNoteSelectorComponent} from './function-note-selector/function-note-selector.component';
import {FunctionSecondsSelectorComponent} from './function-seconds-selector/function-seconds-selector.component';
import {FunctionDisplayComponent} from './function-display/function-display.component';
import {AttributionListComponent} from './attribution-list/attribution-list.component';

@NgModule({
  declarations: [
    AppComponent
    , NavBarComponent
    , HomeComponent
    , ErrorNotFoundComponent
    , CodeMusicComponent
    , FunctionInstructionsTableComponent
    , SoundSelectorComponent
    , FunctionBuilderComponent
    , FunctionTypeSelectorComponent
    , FunctionNoteSelectorComponent
    , FunctionSecondsSelectorComponent
    , FunctionDisplayComponent
    , AttributionListComponent
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
