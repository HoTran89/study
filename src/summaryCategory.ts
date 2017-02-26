import { Component, Input } from "@angular/core";

@Component({
    selector: "summary-category",
    templateUrl: "src/summaryCategory.html"
})

export class SummaryCategory {
    @Input() category: any;
}