import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  code: string;

  run(){
    try{
      eval(this.code);
      //CodeMusicInterpreter.runPlayListItems();
    } catch(e){
      //displayError(e);
      console.log(e);
    }
  }

}
