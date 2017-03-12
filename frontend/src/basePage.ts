import { AfterViewInit } from "@angular/core";
import { Router } from "@angular/router";

export class BasePage implements AfterViewInit {
    private router: Router;
    constructor(router: Router) {
        this.router = router;
    }
    ngAfterViewInit() {
        this.OnReady();
    }

    protected OnReady() {

    }

    protected navigate(url: string, ...options: Array<any>) {
        let params = options || [];
        params.unshift(url);
        this.router.navigate(params);
    }
}