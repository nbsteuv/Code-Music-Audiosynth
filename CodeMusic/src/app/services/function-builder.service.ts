import {Injectable} from '@angular/core';

@Injectable()
export class FunctionBuilderService{

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
        return ['Note', 'Rest', 'Chord'];
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
        return [0.25, 0.5, 0.75, 1];
    }

}