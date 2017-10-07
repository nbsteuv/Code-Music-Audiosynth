
//Audiosynth API Abstraction Functions

var CodeMusicInterpreter;

(function(){

CodeMusicInterpreter = {
	soundId: 0,
	playList: [],
	octaveRange: [1, 8],
	noteRange: ['A', 'B', 'C', 'D', 'E', 'F', 'G'],
	runPlayListItems: async function(){
		for(var i = 0; i < this.playList.length; i++){
			var playListItem = this.playList[i];
			switch(playListItem.type){
				case 'note':
					this.playNote(playListItem);
					await wait(playListItem.seconds);
					break;
				case 'rest':
					await wait(playListItem.seconds);
					break;
				case 'chord':
					for(var noteIndex = 0; noteIndex < playListItem.notes.length; noteIndex++){
						this.playNote(playListItem.notes[noteIndex]);
					}
					await wait(playListItem.seconds);
					break;
				default:
					throw new Error('Play type not implemented');
			}
		}
	},
	parseNote: function(noteString){
		//Validate note string length
		if(noteString.length > 3){
			throw new Error('The note cannot be more than 3 characters long and must include a note and octave');
		}
		if(noteString.length < 2){
			throw new Error('The note cannot be less than 2 characters long and must include a note and octave');
		}

		//Validate octave character
		var octave = noteString[noteString.length - 1];
		if(isNaN(octave)){
			throw new Error('Octave (the last character in the note) must be a number 1-8');
		}
		var octaveRange = this.octaveRange;
		if(octave < octaveRange[0]){
			octave = octaveRange[0];
		}
		if(octave > octaveRange[1]){
			octave = octaveRange[1];
		}

		//Validate note character and optional sharp
		var note;
		if(this.noteRange.indexOf(noteString[0].toUpperCase()) === -1){
			throw new Error('Note must be a letter A-G');
		}
		if(noteString.length === 3){
			if(noteString[1] !== '#'){
				throw new Error('Note must be a letter A-G plus an optional sharp symbol (#)');
			}
			var note = noteString.slice(0,2).toUpperCase();
		} else {
			var note = noteString[0].toUpperCase();
		}

		return {note: note, octave: octave};
	},
	buildNote: function(note, octave, seconds){
		var note = {
			type: 'note'
			, note: note
			, octave: octave
			, seconds: seconds
		}
		return note;
	},
	playNote: function(note){
		Synth.play(this.soundId, note.note, note.octave, note.seconds);
	},
	buildRest: function(seconds){
		var rest = {
			type: 'rest'
			, seconds: seconds
		}
		return rest;
	},
	buildChord: function(noteArray, seconds){
		var chord = {
			type: 'chord',
			notes: noteArray,
			seconds: seconds
		};
		return chord;
	},
	addToPlayList: function(object){
		this.playList.push(object);
	}

}

})();

function wait(seconds){
	var ms = seconds * 1000;
	return new Promise(resolve => setTimeout(resolve, ms));
}

//UI Code Interface Functions

async function codemusic(){

	clearError();
	clearPlayList();

	var code = document.getElementById('code').value;
	console.log(code);

	try{
		eval(code);
		CodeMusicInterpreter.runPlayListItems();
	} catch(e){
		displayError(e);
	}

}

function play(noteString, seconds){
	var parsedNote = CodeMusicInterpreter.parseNote(noteString);
	var note = CodeMusicInterpreter.buildNote(parsedNote.note, parsedNote.octave, seconds);
	CodeMusicInterpreter.addToPlayList(note);
}

function rest(seconds){
	var rest = CodeMusicInterpreter.buildRest(seconds)
	CodeMusicInterpreter.addToPlayList(rest);
}

function playChord(){
	var seconds = arguments[arguments.length - 1];
	if(typeof(seconds) !== 'number'){
		throw new Error('Duration of chord must be a number.');
	}
	var parsedNoteArray = [];
	for(var i = 0; i < arguments.length - 1; i++){
		try{
			var noteString = arguments[i];
			var parsedNote = CodeMusicInterpreter.parseNote(noteString);
			parsedNoteArray.push(parsedNote);
		} catch(e){
			var noteNumber = i + 1;
			var errorMessage = 'Problem in note ' + noteNumber + ' in chord -- ' + e;
			throw new Error(errorMessage);
		}
	}
	var chord = CodeMusicInterpreter.buildChord(parsedNoteArray, seconds);
	CodeMusicInterpreter.addToPlayList(chord);
}

function clearPlayList(){
	CodeMusicInterpreter.playList = [];
}

//Error Handling Functions

function displayError(e){
	document.getElementById('code-error').innerHTML = e;
}

function clearError(){
	document.getElementById('code-error').innerHTML = null;
}

