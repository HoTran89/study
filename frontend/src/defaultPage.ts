import { Component, ApplicationRef } from "@angular/core";
import helperFacade from "./modules/common/index";
import appConfig from "./config/appConfig";

@Component({
    selector: "default-page",
    templateUrl: "src/defaultPage.html"
})
export class DefaultPage {
    constructor(app: ApplicationRef) {
        let injector = app["_injector"];
        helperFacade.appHelper.setInjector(injector);
        helperFacade.appHelper.setConfig(appConfig);
    }
}