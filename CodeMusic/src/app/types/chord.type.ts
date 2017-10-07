import {PlayListItem} from './playlist-item.interface';
import {Note} from './note.type';

declare var Synth: any;

export class Chord implements PlayListItem{

    notes: Note[];
    seconds: number;
    
    constructor(notes: Note[], seconds: number){
        this.notes = notes;
        this.seconds = seconds;
    }

    play(){
        for(let i = 0; i < this.notes.length; i++){
            let seconds = this.seconds;
            let note = this.notes[i].note;
            let octave = this.notes[i].octave;
            let soundId = this.notes[i].soundId
            Synth.play(soundId, note, octave, seconds);
        }
    }
}