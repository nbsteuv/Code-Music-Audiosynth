import {PlayListItem} from './playlist-item.interface';

export class Rest implements PlayListItem{

    seconds: number;
    
    constructor(seconds: number){
        this.seconds = seconds;
    }

    play(soundId: number){
        return;
    }
}