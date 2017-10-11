import {Component, OnInit} from '@angular/core';

import {FunctionBuilderService} from '../services/function-builder.service';

@Component({
    selector: 'function-builder',
    templateUrl: './function-builder.component.html',
    styleUrls: ['./function-builder.component.css']
})
export class FunctionBuilder implements OnInit{

    functionNameChoices: string[];
    functionNoteChoices: string[];
    functionSecondsChoices: number[];
    selectedName: string;
    selectedNotes: string[] = [];
    selectedSeconds: number;
    functionString: string;

    constructor(private functionBuilderService: FunctionBuilderService){}

    ngOnInit(){
        this.functionNameChoices = this.functionBuilderService.getFunctionNameChoices();
        this.functionNoteChoices = this.functionBuilderService.getfunctionNoteChoices();
        this.functionSecondsChoices = this.functionBuilderService.getfunctionSecondChoices();
    }
    
    generate(){
        if( this.selectedName != null && (this.selectedNotes != null || this.selectedName == 'rest') && this.selectedSeconds != null){
            let functionString: string = this.functionBuilderService.generate(this.selectedName, this.selectedNotes, this.selectedSeconds);
            this.functionString = functionString;
        } else {
            this.functionString = null;
        }
    }

    onFunctionNameSelected(functionName: string){
        this.selectedName = functionName;
        this.generate();
    }

    onFunctionNotesSelected(functionNotes: string[]){
        this.selectedNotes = functionNotes;
        this.generate();
    }

    onFunctionSecondsSelected(functionSeconds: number){
        this.selectedSeconds = functionSeconds;
        this.generate();
    }

}