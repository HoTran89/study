import { CategoryService } from "./categoryService";
import { HttpConnector } from "./httpConnector";
import { IoCName, IoCLifeCycle } from "./enum";

let appConfig = {
    ioc: [
        { name: IoCName.ICategoryService, instance: CategoryService, lifeCycle: IoCLifeCycle.Singleton },
        { name: IoCName.IConnector, instance: HttpConnector, lifeCycle: IoCLifeCycle.Transient }
    ]
}
export default appConfig;