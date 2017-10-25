import {Component, OnInit} from '@angular/core';

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
export class CodeMusicComponent implements OnInit{

    code: string;
    displayError: string;
    sounds: Sound[];
    selectedSound: Sound;

    constructor(private codeMusicService: CodeMusicService){}

    ngOnInit(){
        this.sounds = this.codeMusicService.sounds;
        this.selectedSound = this.codeMusicService.selectedSound;
    }

    run(){
        let play = this.play.bind(this);
        let rest = this.rest.bind(this);
        let playChord = this.playChord.bind(this);
        
        try{
            this.codeMusicService.clearPlayList();
            eval(this.code);
            this.codeMusicService.runPlayListItems();
        } catch(e){
            this.displayError = e;
        }; 
    }
        
    play(noteString: string, seconds: number){
        let note: Note = this.codeMusicService.buildNote(noteString, seconds);
        this.codeMusicService.addToPlayList(note);
    }
        
    rest(seconds: number){
        let rest: Rest = new Rest(seconds);
        this.codeMusicService.addToPlayList(rest);
    }
        
    playChord(noteArray: string[], seconds: number){
        let chord: Chord = this.codeMusicService.buildChord(noteArray, seconds);
        this.codeMusicService.addToPlayList(chord);
    }

    onSoundSelected(sound: Sound){
        this.codeMusicService.setSelectedSound(sound);
        this.selectedSound = sound;
    }

}