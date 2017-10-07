import {PlayListItem} from './playlist-item.interface';

declare var Synth: any;

export class Note implements PlayListItem{

    soundId: number;
    note: string;
    octave: number;
    seconds: number;
    
    constructor(soundId: number, note: string, octave: number, seconds: number){
        this.soundId = soundId;
        this.note = note;
        this.octave = octave;
        this.seconds = seconds;
    }

    play(){
        Synth.play(this.soundId, this.note, this.octave, this.seconds);
    }
}