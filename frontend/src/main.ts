/// <reference path="extenstion.d.ts"/>
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import appConfig from "./config/appConfig";
import helperFacade from "@app/common";
import { AppModule } from "./appModule";

helperFacade.iocHelper.configIoC(appConfig).then(() => {
    platformBrowserDynamic().bootstrapModule(AppModule);
});