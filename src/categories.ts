import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
    templateUrl: "src/categories.html"
})
export class Categories {
    private router: Router;
    constructor(router: Router) {
        this.router = router;
    }

    public onRowClicked(id: string) {
        this.router.navigate(["/editCategory", id])
    }
}
