import {Component} from '@angular/core';
import {Provider} from '@angular/core';

import {CodeMusicService} from './services/codemusic.service';
import {FunctionBuilderService} from './services/function-builder.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CodeMusicService, FunctionBuilderService]
})
export class AppComponent {}
