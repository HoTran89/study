import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { DefaultPage } from "./defaultPage";
import { SecurityRoute } from "./securityRoute";
import { Categories } from "./categories";
import { AddCategory } from "./addCategory";

@NgModule({
    imports: [BrowserModule, FormsModule, SecurityRoute],
    declarations: [DefaultPage, Categories, AddCategory],
    bootstrap: [DefaultPage]
})
export class SecurityModule { }
