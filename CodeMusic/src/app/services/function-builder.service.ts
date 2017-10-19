import {Injectable, OnInit} from '@angular/core';

import {FunctionType} from '../types/function-type.type';
import {FunctionSeconds} from '../types/function-seconds.type';

@Injectable()
export class FunctionBuilderService{

    functionTypeChoices: FunctionType[];
    functionSecondsChoices: FunctionSeconds[];

    constructor(){
        this.init();
    }

    init(){
        console.log('service');
        this.functionTypeChoices = [
            new FunctionType('Note', 'Note', '/assets/images/quarter-note.png'),
            new FunctionType('Chord', 'Chord','/assets/images/chord.png'),
            new FunctionType('Rest', 'Rest','/assets/images/quarter-note-rest.png'),
        ];
        this.functionSecondsChoices = [
            new FunctionSeconds('Half', 2, '/assets/images/half-note.png', '/assets/images/half-note-rest.png'),
            new FunctionSeconds('Quarter', 1, '/assets/images/quarter-note.png', '/assets/images/quarter-note-rest.png'),
            new FunctionSeconds('Eighth', 0.5, '/assets/images/eighth-note.png', '/assets/images/eighth-note-rest.png'),
        ]
    }

    generate(type: string, notes: string[], seconds: number){
        let functionString: string;
        switch(type){
            case 'Note':
                functionString = 'play("' + notes[0] + '", ' + seconds + ');';
                return functionString;
            case 'Rest':
                functionString = 'rest(' + seconds + ');';
                return functionString;
            case 'Chord':
                let noteString: string = '["' + notes[0] + '"';
                for(let i = 1; i < notes.length; i++){
                    noteString += ', "' + notes[i] + '"';
                }
                noteString += ']';
                functionString = 'playChord(' + noteString + ', ' + seconds + ');';
                return functionString;
            default:
                return '';
        }
    }

    getFunctionTypeChoices(){
        console.log(this.functionTypeChoices);
        return this.functionTypeChoices;
    }

    getfunctionNoteChoices(){
        return [
            'C4'
            , 'C#4' 
            , 'D4' 
            , 'D#4' 
            , 'E4' 
            , 'F4' 
            , 'F#4' 
            , 'G4' 
            , 'G#4'
            , 'A4'
            , 'A#4'
            , 'B4'
            , 'C5' 
        ];
    }

    getfunctionSecondChoices(){
        return this.functionSecondsChoices;
    }

}