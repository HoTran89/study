/// <reference path="extenstion.d.ts"/>
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { SecurityModule } from "./securityModule";
import IocHelper from "./iocHelper";

IocHelper.configIoC().then(() => {
    platformBrowserDynamic().bootstrapModule(SecurityModule);
});