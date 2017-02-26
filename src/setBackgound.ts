import { Directive, Input, ElementRef, AfterViewInit } from "@angular/core";

@Directive({
    selector: "[setBackground]"
})

export class SetBackground implements AfterViewInit {
    // @Input() color: string;
    // @Input() defaultColor: string;
    @Input("setBackground") color: string;
    @Input("defaultColor") defaultColor: string;

    private ui: ElementRef = null;
    constructor(ui: ElementRef) {
        this.ui = ui;
    }

    ngAfterViewInit() {
        this.ui.nativeElement.style.backgroundColor = this.defaultColor ? this.defaultColor : this.color;
    }
}