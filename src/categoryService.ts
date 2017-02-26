export class CategoryService {
    public getCategories(): Array<any> {
        let categories = [
            { id: "1", name: "name 1", key: "key 1", description: "description 1", avatar: "img.jpg" },
            { id: "2", name: "name 2", key: "key 2", description: "description 2", avatar: "img.jpg" },
            { id: "3", name: "name 3", key: "key 3", description: "description 3", avatar: "img.jpg" }
        ];
        return categories;
    }
}