
//Audiosynth API Abstraction Functions

var CodeMusicInterpreter;

(function(){

CodeMusicInterpreter = {
	soundId: 0,
	playList: [],
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
				default:
					throw new Error('Play type not implemented');
			}
		}
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

function play(note, octave, seconds){
	var note = CodeMusicInterpreter.buildNote(note, octave, seconds);
	CodeMusicInterpreter.addToPlayList(note);
}

function rest(seconds){
	var rest = CodeMusicInterpreter.buildRest(seconds)
	CodeMusicInterpreter.addToPlayList(rest);
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

