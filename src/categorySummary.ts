import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "category-summary",
    templateUrl: "src/categorySummary.html"
})

export class CategorySummary {
    // @Input() category: any;
    @Input() categoryName: string;
    @Output() onCategoryNameChanged: EventEmitter<string> = new EventEmitter<string>();

    public onValueChanged() {
        console.log(this.categoryName);
        this.onCategoryNameChanged.emit(this.categoryName);
    }
}