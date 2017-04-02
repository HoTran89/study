import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "category-key",
    templateUrl: "src/modules/inventory/_share/components/categoryKey.html"
})
export class CategoryKey {
    @Input() categoryKey: string;
    @Output() categoryKeyChange: EventEmitter<string> = new EventEmitter<string>();

    public onChangeCategoryKey() {
        this.categoryKeyChange.emit(this.categoryKey);
    }
}