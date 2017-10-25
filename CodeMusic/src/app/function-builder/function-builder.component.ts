import {Component, OnInit} from '@angular/core';

import {FunctionBuilderService} from '../services/function-builder.service';
import {FunctionType} from '../types/function-type.type';
import {FunctionSeconds} from '../types/function-seconds.type';
import {FunctionNote} from '../types/function-note.type';

@Component({
    selector: 'function-builder',
    templateUrl: './function-builder.component.html',
    styleUrls: ['./function-builder.component.css']
})
export class FunctionBuilderComponent implements OnInit{

    functionTypeChoices: FunctionType[];
    functionNoteChoices: FunctionNote[];
    functionSecondsChoices: FunctionSeconds[];
    selectedType: FunctionType;
    selectedNotes: FunctionNote[] = [];
    selectedSeconds: FunctionSeconds;
    allowMultipleNotes: boolean;
    showNoteComponent: boolean;
    noteImageType: boolean = true;
    functionString: string;

    constructor(private functionBuilderService: FunctionBuilderService){}

    ngOnInit(): void{
        this.functionTypeChoices = this.functionBuilderService.getFunctionTypeChoices();
        this.functionNoteChoices = this.functionBuilderService.getfunctionNoteChoices();
        this.functionSecondsChoices = this.functionBuilderService.getfunctionSecondChoices();
    }
    
    generate(): void{
        if( this.selectedType != null 
            && (
                (this.selectedNotes != null  && this.selectedNotes.length > 0) || this.selectedType.value == 'Rest'
                ) 
            && this.selectedSeconds != null){
            let selectedNoteValues: string[] = this.selectedNotes.map(selectedNote => selectedNote.value)
            let functionString: string = this.functionBuilderService.generate(this.selectedType.value, selectedNoteValues, this.selectedSeconds.value);
            this.functionString = functionString;
        } else {
            this.functionString = null;
        }
    }

    onFunctionTypeSelected(functionType: FunctionType): void{
        this.selectedType = functionType;
        this.onSelectionChange();
    }

    onFunctionNotesSelected(functionNotes: FunctionNote[]): void{
        this.selectedNotes = functionNotes;
        this.onSelectionChange();
    }

    onFunctionSecondsSelected(functionSeconds: FunctionSeconds): void{
        this.selectedSeconds = functionSeconds;
        this.onSelectionChange();
    }

    onSelectionChange(): void{
        this.generate();
        this.configureComponents();
    }

    configureComponents(): void{
        if(this.selectedType){
            this.allowMultipleNotes = this.selectedType.value == 'Chord' ? true : false;
            this.showNoteComponent = this.selectedType.value == 'Rest' ? false : true;  
            this.noteImageType = this.selectedType.value == 'Rest' ? false : true;
            let newSelectedNotesLength: number;
            switch(this.selectedType.value){
                case 'Note':
                    newSelectedNotesLength = this.selectedNotes.length > 0 ? 1 : 0;
                    break;
                case 'Rest':
                    newSelectedNotesLength = 0;
                    break;
                default:
                    newSelectedNotesLength = this.selectedNotes.length;
            }
            this.selectedNotes.length = newSelectedNotesLength;
        }
    }

}