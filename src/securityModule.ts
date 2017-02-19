import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import { SecurityRoute } from "./securityRoute";
import { Categories } from "./categories";
import { AddCategory } from "./addCategory";
import { EditCategory } from "./editCategory";

@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoute],
    declarations: [DefaultPage, Categories, AddCategory, EditCategory],
    bootstrap: [DefaultPage]
})

export class SecurityModule { }
