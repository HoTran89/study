import { CategoryService } from "./categoryService";
import { HttpConnector } from "./httpConnector";

let appConfig = {
    ioc: [
        { name: "categoryService", instance: CategoryService },
        { name: "iconnector", instance: HttpConnector }
    ]
}
export default appConfig;