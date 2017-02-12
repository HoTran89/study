import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Categories } from "./categories";

let routes: Routes = [
    { path: "", redirectTo: "categories", pathMatch: "full" },
    { path: "categories", component: Categories }
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class SecurityRoute { }