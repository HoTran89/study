import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "form-primary-button",
    templateUrl: "src/formPrimaryButton.html"
})

export class FormPrimaryButton {
    public cls: string = "btn-primary";
    @Input() label: string;
    @Output() click1: EventEmitter<any> = new EventEmitter<any>();
    public onButtonClicked() {
        this.click1.emit("asdasdasds");
    }
}