import { Directive, AfterViewInit, Input, ElementRef } from "@angular/core";

@Directive({
    selector: "[backgroundColor]"
})

export class BackgroundColor implements AfterViewInit {
    @Input("backgroundColor") backgroundColor: string;
    @Input("defaultColor") defaultColor: string;
    private ui: ElementRef = null;

    constructor(ui: ElementRef) {
        this.ui = ui;
    }
    ngAfterViewInit() {
        this.ui.nativeElement.style.backgroundColor = this.defaultColor ? this.defaultColor : this.backgroundColor;
    }
}   