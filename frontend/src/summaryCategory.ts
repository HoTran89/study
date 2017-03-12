import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: "summary-category",
    templateUrl: "src/summaryCategory.html"
})

export class SummaryCategory {
    @Input() categoryName: any;
    @Output() categoryNameChange: EventEmitter<string> = new EventEmitter<string>();
    public onChange(newName: any) {
        this.categoryNameChange.emit(newName);    }

}