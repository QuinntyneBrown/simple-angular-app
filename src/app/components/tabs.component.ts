import {Component,QueryList,ContentChildren,Inject,forwardRef, AfterContentInit} from '@angular/core';
import {TabContentComponent} from "./tab-content.component";
import {TabTitleComponent} from "./tab-title.component";

@Component({
    selector: 'ce-tabs',
    host: { 'class': 'tabs' },
    templateUrl: "./tabs.component.html",
    styleUrls: ["./tabs.component.css"]
})
export class TabsComponent implements AfterContentInit {

    @ContentChildren(TabTitleComponent)
    titles: QueryList<TabTitleComponent>;

    @ContentChildren(TabContentComponent)
    contents: QueryList<TabContentComponent>;

    activeTitle: TabTitleComponent = null;

    ngAfterContentInit() {              
        this.updateActiveTabByTitle(this.titles.first);

        this.titles.changes.subscribe(x => {       
            this.updateActiveTabByTitle(this.titles.first);
        });
    }

    updateActiveTabByTitle(activeTitle: TabTitleComponent) {        
        this.updateActiveTab((titleArr) => titleArr.indexOf(activeTitle));
    }

    nextTab() {
        this.updateActiveTab((titleArr, lastIndex) => (lastIndex + 1) % titleArr.length);
    }

    private updateActiveTab(nextActiveIndexCb: (titleArr: TabTitleComponent[], lastIndex: number) => number) {
        var titleArr = toArray(this.titles);
        var contentArr = toArray(this.contents);
        var lastIndex = titleArr.indexOf(this.activeTitle);
        var nextIndex = nextActiveIndexCb(titleArr, lastIndex);
        this.activeTitle = titleArr[nextIndex];

        if (lastIndex !== -1) {
            titleArr[lastIndex].deactivate();
            contentArr[lastIndex].deactivate();
        }
        titleArr[nextIndex].activate();
        contentArr[nextIndex].activate();
    }
}

function toArray<T>(query: QueryList<T>): T[] { // won't be needed in the next alpha
    var result = [];
    query.map(value => result.push(value));
    return result;
}