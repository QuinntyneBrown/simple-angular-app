import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {TabsComponent} from "./components/tabs.component";
import {TabContentComponent} from "./components/tab-content.component";
import {TabTitleComponent} from "./components/tab-title.component";
import {AppComponent} from "./app.component";

@NgModule(AppModule.moduleDefinition)
export class AppModule {
    static moduleDefinition = {
        declarations: [
            AppComponent,
            TabsComponent,
            TabTitleComponent,
            TabContentComponent
        ],
        imports: [BrowserModule],
        bootstrap: [AppComponent]
    }
}