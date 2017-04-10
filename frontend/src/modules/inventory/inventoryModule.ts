import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import { CommonModule } from "@angular/common";
import { InventoryRoute } from "./inventoryRoute";
import { Categories } from "./category/categories";
import { AddCategory } from "./category/addCategory";
import { EditCategory } from "./category/editCategory";
import { CategoryService } from "./_share/services/categoryService";
import { SummaryCategory } from "./_share/components/summaryCategory";
import { CategoryName } from "./_share/components/categoryName";
import { BackgroundColor } from "./_share/components/backgroundColor";
import { CategoryKey } from "./_share/components/categoryKey";
import { AppCommonModule } from "@app/common";
import { HttpConnector } from "@app/common";
import appConfig from "../../config/appConfig";
import helperFacade from "@app/common";

@NgModule({
    imports: [CommonModule, AppCommonModule, InventoryRoute],
    declarations: [Categories, AddCategory, EditCategory, SummaryCategory,
        CategoryName, BackgroundColor, CategoryKey],
    // bootstrap: [appConfig.layout],
    // providers: [CategoryService, HttpConnector],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})

export class InventoryModule {
    // constructor(app: ApplicationRef) {
    //     let injector = app["_injector"];
    //     helperFacade.appHelper.setInjector(injector);
    //     helperFacade.appHelper.setConfig(appConfig);
    // }
}