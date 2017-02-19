import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { CategoryService } from "./categoryService";

@Component({
    templateUrl: "src/categories.html"
})

export class Categories {
    private router: Router;
    public categories: Array<any> = null;
    public selectedCategory: any = null;
    constructor(router: Router, categoryService: CategoryService) {
        this.router = router;
        this.categories = categoryService.getCategories();
    }

    public onEditCategoryCliked(id: string) {
        this.router.navigate(["editCategory", id]);
    }

    public onSummaryCategoryCliked(category: any) {
        this.selectedCategory = category;
    }

    public onCategoryNameChanged(newName: string) {
        this.selectedCategory.name = newName;
    }
}