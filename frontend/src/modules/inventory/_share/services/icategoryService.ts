import { Promise } from "../../../common/index";

export interface ICategoryService {
    getCategories(): Promise;
}