import { CategoryService } from "../modules/inventory/_share/services/categoryService";
import { HttpConnector } from "../modules/common/index";
import { IoCName, IoCLifeCycle } from "../modules/common/index";
import { DefaultLayout } from "@app/themes/default";

let appConfig = {
    locales: "",
    modules: ["inventory"],
    baseUrl: "http://localhost:59441/api",
    ioc: [
        { name: IoCName.ICategoryService, instance: CategoryService, lifeCycle: IoCLifeCycle.Singleton },
        { name: IoCName.IConnector, instance: HttpConnector, lifeCycle: IoCLifeCycle.Transient }
    ],
    layout: DefaultLayout
}
export default appConfig;