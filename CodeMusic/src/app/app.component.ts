import {Component} from '@angular/core';
import {Provider} from '@angular/core';
import {CodeMusicService} from './services/codemusic.service';
import {Note} from './types/note.type';
import {Rest} from './types/rest.type';
import {Chord} from './types/chord.type';
import {ParsedNote} from './types/parsed-note.type';

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

    let play = this.play.bind(this);
    let rest = this.rest.bind(this);
    let playChord = this.playChord.bind(this);

    try{
      eval(this.code);
      this.CodeMusicInterpreter.runPlayListItems();
    } catch(e){
      this.displayError = e;
    };

  }

  play(noteString: string, seconds: number){
    let note: Note = this.CodeMusicInterpreter.buildNote(noteString, seconds);
    this.CodeMusicInterpreter.addToPlayList(note);
  }

  rest(seconds: number){
    let rest: Rest = new Rest(seconds);
    this.CodeMusicInterpreter.addToPlayList(rest);
  }

  playChord(noteArray: string[], seconds: number){
    let chord: Chord = this.CodeMusicInterpreter.buildChord(noteArray, seconds);
    this.CodeMusicInterpreter.addToPlayList(chord);
  }

}
