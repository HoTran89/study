/// <reference path="extenstion.d.ts"/>
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { InventoryModule } from "./modules/inventory/inventoryModule";
import appConfig from "./config/appConfig";
import helperFacade from "@app/common";

helperFacade.iocHelper.configIoC(appConfig).then(() => {
    platformBrowserDynamic().bootstrapModule(InventoryModule);
});