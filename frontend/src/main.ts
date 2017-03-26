/// <reference path="extenstion.d.ts"/>
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { SecurityModule } from "./securityModule";
import IocHelper from "./iocHelper";
import appHelper from "./appHelper";

IocHelper.configIoC().then(() => {
    platformBrowserDynamic().bootstrapModule(SecurityModule).then((platFormRef: any) => {
        appHelper.setInjector(platFormRef.injector);
    });
});