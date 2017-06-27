import { Component, ViewEncapsulation, trigger, state, style, transition, animate } from "@angular/core";

@Component({
    templateUrl: "./app.component.html",
    styleUrls: ["./app.component.css"],
    selector: "app",    
    encapsulation: ViewEncapsulation.Emulated,
    animations: [
        trigger('signal', [
            state('go', style({
                'background-color': 'green'
            })),
            state('stop', style({
                'background-color': 'red'
            })),
            transition('* => *', animate(500))
        ]
    )]
})
export class AppComponent {
    public signal: string = 'stop';

    public onGoClick() {
        this.signal = 'go';
    }

    public onStopClick() {
        this.signal = 'stop';
    }
}
