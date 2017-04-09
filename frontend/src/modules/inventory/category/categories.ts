import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { ICategoryService } from "../_share/services/icategoryService";
import { IoCName, BasePage } from "@app/common";

@Component({
    templateUrl: "src/modules/inventory/category/categories.html"
})

export class Categories extends BasePage {
    // private router: Router;
    public categories: Array<any> = null;
    public selectedCategory: any;
    constructor(router: Router) {
        super(router);
        // this.router = router;
        // this.categories = categoryService.getCategories();
        let self: Categories = this;
        let categoryService: ICategoryService = window.ioc.resolve(IoCName.ICategoryService);
        // categoryService.getCategories().then(function (categories: Array<any>) {
        //     self.categories = categories;
        // });

        categoryService.getCategories().then((categories: Array<any>) => {
            self.categories = categories;
        }).error(function (error: any) {
            console.log("Error ne", error);
        });
    }

    public onEditCategoryCliked(id: string) {
        this.navigate("editCategory", id);
        // this.router.navigate(["editCategory", id]);
    }

    public onSummaryCategoryCliked(category: any) {
        this.selectedCategory = category;
        console.log(this.selectedCategory);
    }

    public onSetNewCategoryName(newName: any) {
        this.selectedCategory.name = newName;
    }

    public onCategoryNameChanged(newName: any) {
        this.selectedCategory.name = newName;
    }
}