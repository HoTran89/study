import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "show-name-category",
    templateUrl: "src/showNameCategory.html"
})

export class ShowNameCategory {
    @Input() categoryName: string;
    @Output() onChangedCategoryName: EventEmitter<string> = new EventEmitter<string>();

    public onChangeCategoryName() {
        this.onChangedCategoryName.emit(this.categoryName);
    }
}