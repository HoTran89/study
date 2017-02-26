import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/observable";
import "rxjs/add/operator/map";

@Injectable()
export class CategoryService {
    private http: Http;
    constructor(http: Http) {
        this.http = http;
    }
    public getCategories(): Observable<any> {
        return this.http.get("/api/categories.json").map(this.handleData);
    }

    private handleData(response: Response): any {
        return response.json();
    }
}