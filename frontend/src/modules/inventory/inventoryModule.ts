import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, ApplicationRef } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { DefaultPage } from "../../defaultPage";
import { InventoryRoute } from "./inventoryRoute";
import { Categories } from "./category/categories";
import { AddCategory } from "./category/addCategory";
import { EditCategory } from "./category/editCategory";
import { CategoryService } from "./_share/services/categoryService";
import { SummaryCategory } from "./_share/components/summaryCategory";
import { CategoryName } from "./_share/components/categoryName";
import { BackgroundColor } from "./_share/components/backgroundColor";
import { CategoryKey } from "./_share/components/categoryKey";
import { CommonModule } from "../common/CommonModule";
import { HttpConnector } from "@app/common";
import heplerFacade from "@app/common";

@NgModule({
    imports: [BrowserModule, InventoryRoute, HttpModule, CommonModule],
    declarations: [DefaultPage, Categories, AddCategory, EditCategory, SummaryCategory,
        CategoryName, BackgroundColor, CategoryKey],
    bootstrap: [DefaultPage],
    // providers: [CategoryService, HttpConnector],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})

export class InventoryModule {
    // constructor(ref: ApplicationRef) {
    //     console.log(ref);
    //     heplerFacade.appHelper.setInjector(ref["_injector"]);
    // }
}