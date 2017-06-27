import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";

import { AppComponent } from "./app.component";

@NgModule(AppModule.moduleDefinition)
export class AppModule {
    static moduleDefinition = {
        declarations: [AppComponent],
        imports: [BrowserModule, BrowserAnimationsModule],
        bootstrap: [AppComponent]
    }
}