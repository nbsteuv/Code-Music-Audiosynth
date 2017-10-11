import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'function-seconds-selector',
    templateUrl: './function-seconds-selector.component.html',
    styleUrls: ['./function-seconds-selector.component.css']
})
export class FunctionSecondsSelector{

    @Output() functionSecondsSelected: EventEmitter<number> = new EventEmitter<number>();
    @Input() functionSecondsChoices: number[];
    @Input() selectedFunctionSeconds: number;

    selectSeconds(selectedSeconds: number){
        this.functionSecondsSelected.emit(selectedSeconds);
    }

}