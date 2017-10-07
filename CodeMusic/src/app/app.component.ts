import {Component} from '@angular/core';
import {Provider} from '@angular/core';
import {CodeMusicService} from './services/codemusic.service';

declare var Synth: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [CodeMusicService]
})
export class AppComponent {

  code: string;
  displayError: string;

  constructor(private CodeMusicInterpreter: CodeMusicService){}

  run(){
    this.CodeMusicInterpreter.testMethod();
    try{
      eval(this.code);
      //CodeMusicInterpreter.runPlayListItems();
    } catch(e){
      this.displayError = e;
    }
  }



}
