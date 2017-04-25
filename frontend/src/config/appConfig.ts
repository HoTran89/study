import { CategoryService } from "../modules/inventory/_share/services/categoryService";
import { HttpConnector } from "../modules/common/index";
import { IoCName, IoCLifeCycle } from "../modules/common/index";
import { DefaultLayout } from "@app/themes/default";

let appConfig = {
    locales: "",
    modules: ["inventory"],
    baseUrl: "http://localhost:59441/api",
    ioc: [],
    layout: DefaultLayout
}
export default appConfig;