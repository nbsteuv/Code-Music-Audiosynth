import {Component} from '@angular/core';
import {Provider} from '@angular/core';

import {CodeMusicService} from './services/codemusic.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CodeMusicService]
})
export class AppComponent {}
