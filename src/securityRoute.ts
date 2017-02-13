import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Categories } from "./categories";
import { AddCategory } from "./addCategory";

let routes: Routes = [
    { path: "", redirectTo: "categories", pathMatch: "full" },
    { path: "categories", component: Categories },
    { path: "addCategory", component: AddCategory },
    { path: "editCategory/:id", component: AddCategory }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class SecurityRoute { } 