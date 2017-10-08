import {PlayListItem} from './playlist-item.interface';

declare var Synth: any;

export class Note implements PlayListItem{

    note: string;
    octave: number;
    seconds: number;
    
    constructor(note: string, octave: number, seconds: number){
        this.note = note;
        this.octave = octave;
        this.seconds = seconds;
    }

    play(soundId: number){
        Synth.play(soundId, this.note, this.octave, this.seconds);
    }
}