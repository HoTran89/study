import { IoCFactory } from "./iocFactory";
import { Promise, PromiseFactory } from "./promise";
import appConfig from "./appConfig";

let iocHelper = {
    configIoC: configIoC
}

export default iocHelper;

function configIoC(): Promise {
    let def = PromiseFactory.create();
    window.ioc = IoCFactory.create();
    window.ioc.import(appConfig.ioc);
    def.resolve({});
    return def;
}