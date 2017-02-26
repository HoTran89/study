import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
    templateUrl: "src/addCategory.html",

})
export class AddCategory {
    private activatedRoute: ActivatedRoute;
    constructor(activedRoute: ActivatedRoute) {
        this.activatedRoute = activedRoute;
        console.log(this.activatedRoute.params["value"].id);

    }

}