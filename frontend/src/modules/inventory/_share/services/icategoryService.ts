import { Promise } from "@app/common";

export interface ICategoryService {
    getCategories(): Promise;
}