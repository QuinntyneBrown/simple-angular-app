import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";

import {AppComponent} from "./app.component";

@NgModule(AppModule.moduleDefinition)
export class AppModule {
    static moduleDefinition = {
        declarations: [AppComponent],
        imports: [BrowserModule],
        bootstrap: [AppComponent]
    }
}