import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {Home} from './home/home.component';
import {ErrorNotFound} from './error-not-found/error-not-found.component';
import {CodeMusic} from './codemusic/codemusic.component';
import {FunctionBuilder} from './function-builder/function-builder.component';

@NgModule({
    imports: [RouterModule.forRoot([
        {path: '', component: Home},
        {path: 'code', component: CodeMusic},
        {path: 'generator', component: FunctionBuilder},
        {path: '**', component: ErrorNotFound}
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule{}