import { Directive, ElementRef, Input, AfterViewInit } from "@angular/core";

@Directive({
    selector: "[blueColor]"
})

export class BlueColor implements AfterViewInit {
    // @Input() color: string;
    // @Input() defaultColor: string;
    @Input("blueColor") color: string;
    @Input("defaultColor") defaultColor: string;
    private ui: ElementRef;
    constructor(ui: ElementRef) {
        this.ui = ui;
    }

    ngAfterViewInit() {
        this.ui.nativeElement.style.backgroundColor = this.defaultColor ? this.defaultColor : this.color;
    }
}
