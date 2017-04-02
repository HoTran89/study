import { Input, Component, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "form-input",
    templateUrl: "src/modules/common/components/formInput.html"
})

export class FormInput {
    @Input() label: string;
    @Input() value: any;
    @Output() valueChange: EventEmitter<string> = new EventEmitter<string>();

    public onValueChange() {
        this.valueChange.emit(this.value);
    }
}