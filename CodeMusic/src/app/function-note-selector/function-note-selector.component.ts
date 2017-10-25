import {Component, Input, Output, EventEmitter, OnChanges} from '@angular/core';

import {FunctionNote} from '../types/function-note.type';

@Component({
    selector: 'function-note-selector',
    templateUrl: './function-note-selector.component.html',
    styleUrls: ['./function-note-selector.component.css']
})
export class FunctionNoteSelectorComponent implements OnChanges{

    @Output() functionNotesSelected: EventEmitter<FunctionNote[]> = new EventEmitter<FunctionNote[]>();
    @Input() functionNoteChoices: FunctionNote[];
    @Input() selectedFunctionNotes: FunctionNote[];
    @Input() multiple: boolean;

    selectedNotes: FunctionNote[] = [];
    leftSideNotes: FunctionNote[];
    rightSideNotes: FunctionNote[];

    selectNote(selectedNote: FunctionNote){
        this.toggleNote(selectedNote);
        this.functionNotesSelected.emit(this.selectedNotes);
    }

    toggleNote(note: FunctionNote){
        if(this.multiple){
            let index = this.selectedNotes.indexOf(note);
            if(index == -1){
                this.selectedNotes.push(note);
            } else{
                this.selectedNotes.splice(index, 1);
            }
        } else {
            this.selectedNotes = [note];
        }
    }

    ngOnChanges(){
        if(this.functionNoteChoices){
            this.setFunctionNoteSides();
        }
    }

    setFunctionNoteSides(){
        this.leftSideNotes = this.functionNoteChoices.filter(functionNote => functionNote.cssId.indexOf('1') === -1);
        this.rightSideNotes = this.functionNoteChoices.filter(functionNote => functionNote.cssId.indexOf('1') !== -1);
    }




}