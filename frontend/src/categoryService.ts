import { Promise } from "./promise";
import { IConnector } from "./iconnector";
import { ICategoryService } from "./icategoryService";
import { IoCName } from "./enum";

// @Injectable()
export class CategoryService implements ICategoryService {
    // private iconnnector: IConnector;
    // constructor(iconnector: HttpConnector) {
    //     this.iconnnector = iconnector;
    // }
    public getCategories(): Promise {
        let iconnector = window.ioc.resolve(IoCName.IConnector);
        return iconnector.get("http://localhost:59441/api/categories");
    }
}