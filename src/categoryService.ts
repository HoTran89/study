export class CategoryService {
    public getCategories(): Array<any> {
        return [
            { id: "1", name: "category 1", key: "key 1", description: "description 1", avatar: "img.jpg" },
            { id: "2", name: "category 2", key: "key 2", description: "description 2", avatar: "img.jpg" }
        ]
    }
}