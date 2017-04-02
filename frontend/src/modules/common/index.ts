import appHelper from "./helpers/appHelper";
import iocHelper from "./ioc/iocHelper";
import { HelperFacade } from "./models/helperFacade";
export * from "./ioc/enum";
export * from "./connectors/httpConnector";
export * from "./models/promise";
export * from "./connectors/iconnector";
export * from "./models/basePage";

let helperFacade = new HelperFacade();
helperFacade.iocHelper = iocHelper;
helperFacade.appHelper = appHelper;

export default helperFacade;