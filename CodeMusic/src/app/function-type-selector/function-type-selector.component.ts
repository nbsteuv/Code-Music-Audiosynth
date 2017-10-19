import {Component, Input, Output, EventEmitter} from '@angular/core';

import {FunctionType} from '../types/function-type.type';

@Component({
    selector: 'function-type-selector',
    templateUrl: './function-type-selector.component.html',
    styleUrls: ['./function-type-selector.component.css']
})
export class FunctionTypeSelector{

    @Output() functionTypeSelected: EventEmitter<FunctionType> = new EventEmitter<FunctionType>();
    @Input() functionTypeChoices: FunctionType[];
    @Input() selectedFunctionType: FunctionType;

    selectName(selectedType: FunctionType){
        this.functionTypeSelected.emit(selectedType);
    }

}