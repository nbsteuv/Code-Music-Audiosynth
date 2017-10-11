import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'function-name-selector',
    templateUrl: './function-name-selector.component.html',
    styleUrls: ['./function-name-selector.component.css']
})
export class FunctionNameSelector{

    @Output() functionNameSelected: EventEmitter<string> = new EventEmitter<string>();
    @Input() functionNameChoices: string[];
    @Input() selectedFunctionName: string;

    selectName(selectedName: string){
        this.functionNameSelected.emit(selectedName);
    }

}