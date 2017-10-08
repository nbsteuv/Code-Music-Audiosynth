import {PlayListItem} from './playlist-item.interface';
import {ParsedNote} from './parsed-note.type';

declare var Synth: any;

export class Chord implements PlayListItem{

    notes: ParsedNote[];
    seconds: number;
    
    constructor(notes: ParsedNote[], seconds: number){
        this.notes = notes;
        this.seconds = seconds;
    }

    play(soundId: number){
        for(let i = 0; i < this.notes.length; i++){
            let seconds = this.seconds;
            let note = this.notes[i].note;
            let octave = this.notes[i].octave;
            Synth.play(soundId, note, octave, seconds);
        }
    }
}