import {Component, OnInit} from '@angular/core';

import {FunctionBuilderService} from '../services/function-builder.service';
import {FunctionType} from '../types/function-type.type';
import {FunctionSeconds} from '../types/function-seconds.type';

@Component({
    selector: 'function-builder',
    templateUrl: './function-builder.component.html',
    styleUrls: ['./function-builder.component.css']
})
export class FunctionBuilder implements OnInit{

    functionTypeChoices: FunctionType[];
    functionNoteChoices: string[];
    functionSecondsChoices: FunctionSeconds[];
    selectedType: FunctionType;
    selectedNotes: string[] = [];
    selectedSeconds: FunctionSeconds;
    allowMultipleNotes: boolean;
    showNoteComponent: boolean;
    noteImageType: boolean;
    functionString: string;

    constructor(private functionBuilderService: FunctionBuilderService){}

    ngOnInit(){
        console.log('component');
        this.functionTypeChoices = this.functionBuilderService.getFunctionTypeChoices();
        this.functionNoteChoices = this.functionBuilderService.getfunctionNoteChoices();
        this.functionSecondsChoices = this.functionBuilderService.getfunctionSecondChoices();
        console.log(this.functionTypeChoices);
        
    }
    
    generate(){
        if( this.selectedType != null 
            && (
                (this.selectedNotes != null  && this.selectedNotes.length > 0) || this.selectedType.value == 'Rest'
                ) 
            && this.selectedSeconds != null){
            let functionString: string = this.functionBuilderService.generate(this.selectedType.value, this.selectedNotes, this.selectedSeconds.value);
            this.functionString = functionString;
        } else {
            this.functionString = null;
        }
    }

    onFunctionTypeSelected(functionType: FunctionType){
        this.selectedType = functionType;
        this.onSelectionChange();
    }

    onFunctionNotesSelected(functionNotes: string[]){
        this.selectedNotes = functionNotes;
        this.onSelectionChange();
    }

    onFunctionSecondsSelected(functionSeconds: FunctionSeconds){
        this.selectedSeconds = functionSeconds;
        this.onSelectionChange();
    }

    onSelectionChange(){
        this.generate();
        this.configureComponents();
    }

    configureComponents(){
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