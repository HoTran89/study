import { Promise } from "./promise";

export interface ICategoryService {
    getCategories(): Promise;
}