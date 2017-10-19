import {Component, Input, Output, EventEmitter} from '@angular/core';

import {FunctionSeconds} from '../types/function-seconds.type';

@Component({
    selector: 'function-seconds-selector',
    templateUrl: './function-seconds-selector.component.html',
    styleUrls: ['./function-seconds-selector.component.css']
})
export class FunctionSecondsSelector{

    @Output() functionSecondsSelected: EventEmitter<FunctionSeconds> = new EventEmitter<FunctionSeconds>();
    @Input() functionSecondsChoices: FunctionSeconds[];
    @Input() selectedFunctionSeconds: FunctionSeconds;
    @Input() noteImageType: boolean;

    selectSeconds(selectedSeconds: FunctionSeconds){
        this.functionSecondsSelected.emit(selectedSeconds);
    }

}