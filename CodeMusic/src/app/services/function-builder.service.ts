import {Injectable, OnInit} from '@angular/core';

import {FunctionType} from '../types/function-type.type';
import {FunctionSeconds} from '../types/function-seconds.type';
import {FunctionNote} from '../types/function-note.type';

@Injectable()
export class FunctionBuilderService{

    functionTypeChoices: FunctionType[];
    functionSecondsChoices: FunctionSeconds[];
    functionNoteChoices: FunctionNote[];

    constructor(){
        this.init();
    }

    init(){
        this.functionTypeChoices = [
            new FunctionType('Note', 'Note', '/assets/images/quarter-note.png'),
            new FunctionType('Chord', 'Chord','/assets/images/chord.png'),
            new FunctionType('Rest', 'Rest','/assets/images/quarter-note-rest.png'),
        ];
        this.functionSecondsChoices = [
            new FunctionSeconds('Half', 2, '/assets/images/half-note.png', '/assets/images/half-note-rest.png'),
            new FunctionSeconds('Quarter', 1, '/assets/images/quarter-note.png', '/assets/images/quarter-note-rest.png'),
            new FunctionSeconds('Eighth', 0.5, '/assets/images/eighth-note.png', '/assets/images/eighth-note-rest.png'),
        ];
        this.functionNoteChoices = [
            new FunctionNote('C4', 'C4', 'C'),
            new FunctionNote('C#4', 'C#4', 'Cs'),
            new FunctionNote('D4', 'D4', 'D'),
            new FunctionNote('D#4', 'D#4', 'Ds'),
            new FunctionNote('E4', 'E4', 'E'),
            new FunctionNote('F4', 'F4', 'F'),
            new FunctionNote('F#4', 'F#4', 'Fs'),
            new FunctionNote('G4', 'G4', 'G'),
            new FunctionNote('G#4', 'G#4', 'Gs'),
            new FunctionNote('A4', 'A4', 'A'),
            new FunctionNote('A#4', 'A#4', 'As'),
            new FunctionNote('B4', 'B4', 'B'),
            new FunctionNote('C5', 'C5', 'C1'),
            new FunctionNote('C#5', 'C#5', 'C1s'),
            new FunctionNote('D5', 'D5', 'D1'),
            new FunctionNote('D#5', 'D#5', 'D1s'),
            new FunctionNote('E5', 'E5', 'E1'),
            new FunctionNote('F5', 'F5', 'F1'),
            new FunctionNote('F#5', 'F#5', 'F1s'),
            new FunctionNote('G5', 'G5', 'G1'),
            new FunctionNote('G#5', 'G#5', 'G1s'),
            new FunctionNote('A5', 'A5', 'A1'),
            new FunctionNote('A#5', 'A#5', 'A1s'),
            new FunctionNote('B5', 'B5', 'B1'),
        ];
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
        return this.functionTypeChoices;
    }

    getfunctionNoteChoices(){
        return this.functionNoteChoices;
    }

    getfunctionSecondChoices(){
        return this.functionSecondsChoices;
    }

}