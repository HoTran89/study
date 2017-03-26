import { NgModule, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { DefaultPage } from "./defaultPage";
import { SecurityRoute } from "./securityRoute";
import { Categories } from "./categories";
import { AddCategory } from "./addCategory";
import { EditCategory } from "./editCategory";
import { CategoryService } from "./categoryService";
import { SummaryCategory } from "./summaryCategory";
import { CategoryName } from "./categoryName";
import { BackgroundColor } from "./backgroundColor";
import { CategoryKey } from "./categoryKey";
import { FormInput } from "./formInput";
import { Page } from "./page";
import { HttpConnector } from "./httpConnector";
import { HorizalForm } from "./horizalForm";
import { FormButton } from "./formButton";
import { FormPrimaryButton } from "./formPrimaryButton";

@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoute, HttpModule],
    declarations: [DefaultPage, Categories, AddCategory, EditCategory, SummaryCategory,
        CategoryName, BackgroundColor, CategoryKey, FormInput, Page, HorizalForm, FormButton, FormPrimaryButton
    ],
    bootstrap: [DefaultPage],
    // providers: [CategoryService, HttpConnector],
    schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})

export class SecurityModule { }