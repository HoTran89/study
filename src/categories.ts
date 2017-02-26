import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CategoryService } from "./categoryService";


@Component({
    templateUrl: "src/categories.html"
})
export class Categories {
    private router: Router;
    private selectedCategory: any = null;
    public categories: Array<any> = null;
    constructor(router: Router, categoryService: CategoryService) {
        this.router = router;
        this.categories = categoryService.getCategories();
    }

    public onEditCategoryClicked(id: string) {
        this.router.navigate(["/editCategory", id])
    }

    public onSummaryCategoryClicked(category: any) {
        this.selectedCategory = category;
    }

    public onSetNewCategoryName(newName: any) {
        this.selectedCategory.name = newName;
    }
}
