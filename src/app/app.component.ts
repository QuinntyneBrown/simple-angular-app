import { Component, ViewEncapsulation, trigger, state, style } from "@angular/core";

@Component({
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    selector: "app",    
    animations: [
        trigger('signal', [
            state('go', style({
                'background-color':'green'
            }))
        ]
    )],
    encapsulation: ViewEncapsulation.Emulated
})
export class AppComponent { }
