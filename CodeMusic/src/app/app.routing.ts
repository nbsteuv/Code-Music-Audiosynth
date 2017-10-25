import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home/home.component';
import {ErrorNotFoundComponent} from './error-not-found/error-not-found.component';
import {CodeMusicComponent} from './codemusic/codemusic.component';
import {FunctionBuilderComponent} from './function-builder/function-builder.component';
import {AttributionListComponent} from './attribution-list/attribution-list.component';

@NgModule({
    imports: [RouterModule.forRoot([
        {path: '', component: CodeMusicComponent},
        {path: 'code', component: CodeMusicComponent},
        {path: 'generator', component: FunctionBuilderComponent},
        {path: 'attributions', component: AttributionListComponent},
        {path: '**', component: ErrorNotFoundComponent}
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule{}