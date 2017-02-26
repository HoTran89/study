import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import { SecurityRoute } from "./securityRoute";
import { Categories } from "./categories";
import { AddCategory } from "./addCategory";
import { CategoryService } from "./categoryService";
import { SummaryCategory } from "./summaryCategory";
import { ShowNameCategory } from "./showNameCategory";
import { SetBackground } from "./setBackgound";

@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoute],
    declarations: [DefaultPage, Categories, AddCategory, SummaryCategory, ShowNameCategory, SetBackground],
    bootstrap: [DefaultPage],
    providers: [CategoryService]
})
export class SecurityModule { }
