import {Injectable} from '@angular/core';

import {PlayListItem} from '../types/playlist-item.interface';
import {Note} from '../types/note.type';

@Injectable()
export class CodeMusicService{

    playList: PlayListItem[] = [];
    octaveRange: number[] = [1, 8];
    noteRange: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G'];
    
    async runPlayListItems(){
        for(let i = 0; i < this.playList.length; i++){
            let playListItem: PlayListItem = this.playList[i];
            playListItem.play();
            await this.wait(playListItem.seconds);
        }
    }

    wait(seconds){
        var ms = seconds * 1000;
        return new Promise(resolve => setTimeout(resolve, ms));
    }

    parseNote(noteString: string){
		//Validate note string length
		if(noteString.length > 3){
			throw new Error('The note cannot be more than 3 characters long and must include a note and octave');
		}
		if(noteString.length < 2){
			throw new Error('The note cannot be less than 2 characters long and must include a note and octave');
		}

		//Validate octave character
		let octave: number = Number(noteString[noteString.length - 1]);
		if(isNaN(octave)){
			throw new Error('Octave (the last character in the note) must be a number 1-8');
		}
		let octaveRange: number[] = this.octaveRange;
		if(octave < octaveRange[0]){
			octave = octaveRange[0];
		}
		if(octave > octaveRange[1]){
			octave = octaveRange[1];
		}

		//Validate note character and optional sharp
		let note: string;
		if(this.noteRange.indexOf(noteString[0].toUpperCase()) === -1){
			throw new Error('Note must be a letter A-G');
		}
		if(noteString.length === 3){
			if(noteString[1] !== '#'){
				throw new Error('Note must be a letter A-G plus an optional sharp symbol (#)');
			}
			note = noteString.slice(0,2).toUpperCase();
		} else {
			note = noteString[0].toUpperCase();
		}

		return {note: note, octave: octave};
    }

    addToPlayList(playListItem: PlayListItem){
		this.playList.push(playListItem);
	}

}
