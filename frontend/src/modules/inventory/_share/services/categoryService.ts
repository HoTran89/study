import { Promise, IConnector } from "@app/common";
import { ICategoryService } from "./icategoryService";
import { IoCName } from "../../../common/ioc/enum";

// @Injectable()
export class CategoryService implements ICategoryService {
    // private iconnnector: IConnector;
    // constructor(iconnector: HttpConnector) {
    //     this.iconnnector = iconnector;
    // }
    public getCategories(): Promise {
        let iconnector = window.ioc.resolve(IoCName.IConnector);
        return iconnector.get("/categories");
    }
}