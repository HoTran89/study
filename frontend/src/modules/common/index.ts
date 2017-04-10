import appHelper from "./helpers/appHelper";
import iocHelper from "./ioc/iocHelper";
import routeHelper from "./helpers/routeHelper";
import { HelperFacade } from "./models/helperFacade";
export * from "./ioc/enum";
export * from "./connectors/httpConnector";
export * from "./models/promise";
export * from "./connectors/iconnector";
export * from "./models/basePage";
export * from "./appCommonModule"

let helperFacade = new HelperFacade();
helperFacade.iocHelper = iocHelper;
helperFacade.appHelper = appHelper;
helperFacade.routeHelper = routeHelper;

export default helperFacade;