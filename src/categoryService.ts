export class CategoryService {
    public getCategories(): Array<any> {
        let categories = [
            { id: "1", name: "name 1", key: "key 1" },
            { id: "2", name: "name 2", key: "key 2" }
        ];
        return categories;
    }
}