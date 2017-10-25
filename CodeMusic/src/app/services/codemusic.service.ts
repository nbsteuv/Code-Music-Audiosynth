import {Injectable} from '@angular/core';

import {PlayListItem} from '../types/playlist-item.interface';
import {Note} from '../types/note.type';
import {Chord} from '../types/chord.type';
import {ParsedNote} from '../types/parsed-note.type';
import {Sound} from '../types/sound.type';

@Injectable()
export class CodeMusicService{

    selectedSound: Sound;
    playList: PlayListItem[] = [];
    octaveRange: number[] = [1, 8];
    noteRange: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    sounds: Sound[] = [];
    
    constructor(){
        this.init();
    }

    init(): void{
        this.sounds.push(new Sound(0, 'Piano', '/assets/images/piano.png'));
        this.sounds.push(new Sound(1, 'Organ', '/assets/images/organ.png'));
        this.sounds.push(new Sound(2, 'Guitar', '/assets/images/guitar.png'));
        this.sounds.push(new Sound(3, 'EDM', '/assets/images/headphones.png'));
        this.selectedSound = this.sounds[0];
    }
    
    async runPlayListItems(){
        for(let i = 0; i < this.playList.length; i++){
            let playListItem: PlayListItem = this.playList[i];
            playListItem.play(this.selectedSound.id);
            await this.wait(playListItem.seconds);
        }
    }

    wait(seconds){
        var ms = seconds * 1000;
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    parseNote(noteString: string): ParsedNote{
		//Validate note string length
		if(noteString.length > 3){
			throw new Error('The note cannot be more than 3 characters long and must include a note and octave');
		}
		if(noteString.length < 2){
			throw new Error('The note cannot be less than 2 characters long and must include a note and octave');
		}

		//Validate octave character
		let octave: number = Number(noteString[noteString.length - 1]);
		if(isNaN(octave)){
			throw new Error('Octave (the last character in the note) must be a number 1-8');
		}
		let octaveRange: number[] = this.octaveRange;
		if(octave < octaveRange[0]){
			octave = octaveRange[0];
		}
		if(octave > octaveRange[1]){
			octave = octaveRange[1];
		}

		//Validate note character and optional sharp
		let note: string;
		if(this.noteRange.indexOf(noteString[0].toUpperCase()) === -1){
			throw new Error('Note must be a letter A-G');
		}
		if(noteString.length === 3){
			if(noteString[1] !== '#'){
				throw new Error('Note must be a letter A-G plus an optional sharp symbol (#)');
			}
			note = noteString.slice(0,2).toUpperCase();
		} else {
			note = noteString[0].toUpperCase();
		}

        let parsedNote: ParsedNote = new ParsedNote(note, octave);
        return parsedNote;
    }

    buildNote(noteString: string, seconds: number): Note{
        let parsedNote: ParsedNote = this.parseNote(noteString);
        let note: Note = new Note(parsedNote.note, parsedNote.octave, seconds);
        return note;
    }

    buildChord(noteArray: string[], seconds: number): Chord{
        let parsedNoteArray: ParsedNote[] = [];
        for(let i = 0; i < noteArray.length; i++){
            try{
                let noteString = noteArray[i];
                let parsedNote: ParsedNote = this.parseNote(noteString);
                parsedNoteArray.push(parsedNote);
            } catch(e){
                let noteNumber = i + 1;
                let errorMessage = 'Problem in note ' + noteNumber + ' in chord -- ' + e;
                throw new Error(errorMessage);
            }
        }

        let chord: Chord = new Chord(parsedNoteArray, seconds);
        return chord;
    }

    addToPlayList(playListItem: PlayListItem): void{
		this.playList.push(playListItem);
    }
    
    clearPlayList(): void{
        this.playList = [];
    }

    setSelectedSound(sound): void{
        this.selectedSound = sound;
    }

}
