import { Component } from "@angular/core";
import { AddNewCategoryModel } from "./addNewCategoryModel";
import { BasePage } from "@app/common";
import { Router } from "@angular/router";

@Component({
    templateUrl: "src/modules/inventory/category/addCategory.html"
})

export class AddCategory extends BasePage {
    public model: AddNewCategoryModel = new AddNewCategoryModel();
    constructor(router: Router) {
        super(router);
    }
    public onCancelClicked() {
        this.navigate("categories");
    }

    protected OnReady() {
        console.log("abc");
    }

    public onSaveClicked() {
        let categoryService = window.ioc.resolve("categoryService");
    }
}