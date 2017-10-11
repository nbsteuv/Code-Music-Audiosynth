import {Injectable} from '@angular/core';

@Injectable()
export class FunctionBuilderService{

    generate(name: string, notes: string[], seconds: number){
        let isChord: boolean = notes.length > 1;
        let openBracket: string = isChord ? '[' : null;
        let functionString: string = name + '(' + openBracket;

        for(let i = 0; i < notes.length; i++){
            let comma = i > 0 ? ', ' : null;
            let noteString: string = comma + '"' + notes[i] + '"';
            functionString += noteString;
        }

        let closeBracket: string = isChord ? ']' : null;
        functionString += closeBracket;

        let secondsComma: string = notes.length > 0 ? ', ' : null;
        let secondString: string = secondsComma + seconds;
        functionString += secondString;

        functionString += ');';

        return functionString;
    }

    getFunctionNameChoices(){
        return ['play', 'rest', 'playChord'];
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