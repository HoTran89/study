import { Component, Input, EventEmitter, Output } from "@angular/core";

@Component({
    selector: "form-button",
    templateUrl: "src/formButton.html"
})

export class FormButton {
    @Input() label: string;
    @Input() cls: string = "btn-default";
    @Output() click1: EventEmitter<any> = new EventEmitter<any>();

    public onButtonClicked() {
        this.click1.emit("nho nho");
    }
}
