import {Component, Input, Output, EventEmitter} from '@angular/core';

import {Sound} from '../types/sound.type';

@Component({
    selector: 'sound-selector',
    templateUrl: './sound-selector.component.html',
    styleUrls: ['./sound-selector.component.css']
})
export class SoundSelectorComponent{
    
    @Output() soundSelected: EventEmitter<Sound> = new EventEmitter<Sound>();
    @Input() sounds: Sound[];
    @Input() selectedSound: Sound;

    selectSound(selectedSound: Sound): void{
        this.soundSelected.emit(selectedSound);
    }



}