import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'function-type-selector',
    templateUrl: './function-type-selector.component.html',
    styleUrls: ['./function-type-selector.component.css']
})
export class FunctionTypeSelector{

    @Output() functionTypeSelected: EventEmitter<string> = new EventEmitter<string>();
    @Input() functionTypeChoices: string[];
    @Input() selectedFunctionType: string;

    selectName(selectedType: string){
        this.functionTypeSelected.emit(selectedType);
    }

}