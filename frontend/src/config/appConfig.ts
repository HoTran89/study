import { CategoryService } from "../modules/inventory/_share/services/categoryService";
import { HttpConnector } from "../modules/common/index";
import { IoCName, IoCLifeCycle } from "../modules/common/index";

let appConfig = {
    baseUrl: "http://localhost:59441/api",
    ioc: [
        { name: IoCName.ICategoryService, instance: CategoryService, lifeCycle: IoCLifeCycle.Singleton },
        { name: IoCName.IConnector, instance: HttpConnector, lifeCycle: IoCLifeCycle.Transient }
    ]
}
export default appConfig;