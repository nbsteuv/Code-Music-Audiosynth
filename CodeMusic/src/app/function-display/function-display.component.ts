import {Component, Input} from '@angular/core';

@Component({
    selector: 'function-display',
    templateUrl: './function-display.component.html',
    styleUrls: ['./function-display.component.css']
})
export class FunctionDisplayComponent{
    @Input() functionString: string;
}