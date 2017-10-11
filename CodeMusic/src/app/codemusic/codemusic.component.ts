import {Component} from '@angular/core';

import{CodeMusicService} from '../services/codemusic.service';
import {Note} from '../types/note.type';
import {Rest} from '../types/rest.type';
import {Chord} from '../types/chord.type';
import {ParsedNote} from '../types/parsed-note.type';
import {Sound} from '../types/sound.type';

@Component({
    selector: 'code-music',
    templateUrl: './codemusic.component.html',
    styleUrls: ['./codemusic.component.css']
})
export class CodeMusic{

    code: string;
    displayError: string;
    sounds: Sound[];
    selectedSound: Sound;

    constructor(private CodeMusicInterpreter: CodeMusicService){
        this.sounds = CodeMusicInterpreter.sounds;
        this.selectedSound = CodeMusicInterpreter.selectedSound;
    }

    run(){
        let play = this.play.bind(this);
        let rest = this.rest.bind(this);
        let playChord = this.playChord.bind(this);
        
        try{
            this.CodeMusicInterpreter.clearPlayList();
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

    onSoundSelected(sound: Sound){
        this.CodeMusicInterpreter.setSelectedSound(sound);
        this.selectedSound = sound;
    }

}