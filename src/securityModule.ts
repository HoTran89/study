import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import { SecurityRoute } from "./securityRoute";
import { Categories } from "./categories";
import { AddCategory } from "./addCategory";
import { EditCategory } from "./editCategory";
import { CategoryService } from "./categoryService";
import { CategorySummary } from "./categorySummary";
import { BlueColor } from "./blueColor";

@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoute],
    declarations: [DefaultPage, Categories, AddCategory, EditCategory, CategorySummary, BlueColor],
    bootstrap: [DefaultPage],
    providers: [CategoryService]
})

export class SecurityModule { }
