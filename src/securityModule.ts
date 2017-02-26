import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
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

@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoute],
    declarations: [DefaultPage, Categories, AddCategory, EditCategory, SummaryCategory, CategoryName, BackgroundColor, CategoryKey, FormInput],
    bootstrap: [DefaultPage],
    providers: [CategoryService]
})

export class SecurityModule { }
