import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {Home} from './home/home.component';
import {ErrorNotFound} from './error-not-found/error-not-found.component';
import {CodeMusic} from './codemusic/codemusic.component';
import {FunctionBuilder} from './function-builder/function-builder.component';
import {AttributionList} from './attribution-list/attribution-list.component';

@NgModule({
    imports: [RouterModule.forRoot([
        {path: '', component: CodeMusic},
        {path: 'code', component: CodeMusic},
        {path: 'generator', component: FunctionBuilder},
        {path: 'attributions', component: AttributionList},
        {path: '**', component: ErrorNotFound}
    ])],
    exports: [RouterModule]
})
export class AppRoutingModule{}