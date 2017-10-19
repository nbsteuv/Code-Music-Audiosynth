import {Component, OnInit} from '@angular/core';

import {FunctionBuilderService} from '../services/function-builder.service';

@Component({
    selector: 'function-builder',
    templateUrl: './function-builder.component.html',
    styleUrls: ['./function-builder.component.css']
})
export class FunctionBuilder implements OnInit{

    functionTypeChoices: string[];
    functionNoteChoices: string[];
    functionSecondsChoices: number[];
    selectedType: string;
    selectedNotes: string[] = [];
    selectedSeconds: number;
    allowMultipleNotes: boolean;
    showNoteComponent: boolean;
    functionString: string;

    constructor(private functionBuilderService: FunctionBuilderService){}

    ngOnInit(){
        this.functionTypeChoices = this.functionBuilderService.getFunctionTypeChoices();
        this.functionNoteChoices = this.functionBuilderService.getfunctionNoteChoices();
        this.functionSecondsChoices = this.functionBuilderService.getfunctionSecondChoices();
    }
    
    generate(){
        if( this.selectedType != null 
            && (
                (this.selectedNotes != null  && this.selectedNotes.length > 0) || this.selectedType == 'Rest'
                ) 
            && this.selectedSeconds != null){
            let functionString: string = this.functionBuilderService.generate(this.selectedType, this.selectedNotes, this.selectedSeconds);
            this.functionString = functionString;
        } else {
            this.functionString = null;
        }
    }

    onFunctionTypeSelected(functionType: string){
        this.selectedType = functionType;
        this.onSelectionChange();
    }

    onFunctionNotesSelected(functionNotes: string[]){
        this.selectedNotes = functionNotes;
        this.onSelectionChange();
    }

    onFunctionSecondsSelected(functionSeconds: number){
        this.selectedSeconds = functionSeconds;
        this.onSelectionChange();
    }

    onSelectionChange(){
        this.generate();
        this.configureComponents();
    }

    configureComponents(){
        this.allowMultipleNotes = this.selectedType == 'Chord' ? true : false;
        this.showNoteComponent = this.selectedType == 'Rest' ? false : true;  
        let newSelectedNotesLength: number;
        switch(this.selectedType){
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