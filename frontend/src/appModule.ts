import { NgModule, ApplicationRef } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { BrowserModule } from "@angular/platform-browser";
import { HttpModule } from "@angular/http";
import appConfig from "./config/appConfig";
import heplerFacade from "@app/common";

// let routes: Routes = [
//     { path: "inventory", loadChildren: "./src/modules/inventory/inventoryModule#InventoryModule" }
// ]

let routes: Routes = heplerFacade.routeHelper.getModuleRoutes(appConfig.modules);
@NgModule({
    declarations: [appConfig.layout],
    imports: [BrowserModule, HttpModule, RouterModule.forRoot(routes)],
    exports: [RouterModule],
    bootstrap: [appConfig.layout],
})

export class AppModule {
    constructor(app: ApplicationRef) {
        let injector = app["_injector"];
        heplerFacade.appHelper.setInjector(injector);
        heplerFacade.appHelper.setConfig(appConfig);
    }
}