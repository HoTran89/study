import { Http, Response } from "@angular/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/observable";
import "rxjs/add/operator/map";
import { Promise } from "./promise";
import { IConnector } from "./iconnector";
import { HttpConnector } from "./httpConnector";

// @Injectable()
export class CategoryService {
    // private iconnnector: IConnector;
    // constructor(iconnector: HttpConnector) {
    //     this.iconnnector = iconnector;
    // }
    public getCategories(): Promise {
        let iconnector = window.ioc.resolve("iconnector");
        return iconnector.get("/api/categories.json");
    }
}