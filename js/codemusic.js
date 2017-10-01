function codemusic(){

	clearError()

	var code = document.getElementById('code').value;
	console.log(code);

	try{
		eval(code);
	} catch(e){
		displayError(e);
	}

}

function displayError(e){
	document.getElementById('code-error').innerHTML = e;
}

function clearError(){
	document.getElementById('code-error').innerHTML = null;
}