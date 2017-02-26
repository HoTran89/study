import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "category-name",
    templateUrl: "src/categoryName.html"
})

export class CategoryName {
    @Input() categoryName: string;
    @Output() onChangedCategoryName: EventEmitter<string> = new EventEmitter<string>();

    public onChangeCategoryName() {
        this.onChangedCategoryName.emit(this.categoryName);
    }
}