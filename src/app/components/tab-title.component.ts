import { Component, QueryList, ContentChildren, Inject, forwardRef } from '@angular/core';
import { TabsComponent } from "./tabs.component";

@Component({
    templateUrl: "./tab-title.component.html",
    selector: "ce-tab-title",
    host: { '(click)': 'updateActiveTab()', '[class.is-active]': 'active', 'class': 'tabs__tab' },
})
export class TabTitleComponent {
    active: boolean = false;
    constructor( @Inject(forwardRef(() => TabsComponent)) private tabs: TabsComponent) { }

    updateActiveTab() {
        this.tabs.updateActiveTabByTitle(this);
    }

    activate() {
        this.active = true;
    }

    deactivate() {
        this.active = false;
    }
}
