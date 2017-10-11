import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
    selector: 'function-note-selector',
    templateUrl: './function-note-selector.component.html',
    styleUrls: ['./function-note-selector.component.css']
})
export class FunctionNoteSelector{

    @Output() functionNotesSelected: EventEmitter<string[]> = new EventEmitter<string[]>();
    @Input() functionNoteChoices: string[];
    @Input() selectedFunctionNotes: string[];

    selectedNotes: string[] = [];

    selectNote(selectedNote: string){
        this.toggleNote(selectedNote);
        this.functionNotesSelected.emit(this.selectedNotes);
    }

    toggleNote(note: string){
        let index = this.selectedNotes.indexOf(note);
        if(index == -1){
            this.selectedNotes.push(note);
        } else{
            this.selectedNotes.splice(index, 1);
        }
    }

}