import {Component} from '@angular/core';
import {Provider} from '@angular/core';
import {CodeMusicService} from './services/codemusic.service';
import {Note} from './types/note.type';

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
  soundId: number = 0;

  constructor(private CodeMusicInterpreter: CodeMusicService){}

  run(){

    let play = this.play.bind(this);

    try{
      eval(this.code);
      this.CodeMusicInterpreter.runPlayListItems();
    } catch(e){
      this.displayError = e;
    };

  }

  play(noteString: string, seconds: number){
    let parsedNote = this.CodeMusicInterpreter.parseNote(noteString);
    let note: Note = new Note(this.soundId, parsedNote.note, parsedNote.octave, seconds);
    this.CodeMusicInterpreter.addToPlayList(note);
  }

}
