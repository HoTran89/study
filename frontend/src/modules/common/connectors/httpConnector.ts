import { Injectable } from "@angular/core";
import { Promise, PromiseFactory } from "../models/promise";
import { Http, Response } from "@angular/http";
import { IConnector } from "./iconnector";
import "rxjs/add/operator/map";
import appHelper from "../helpers/appHelper";
// @Injectable()
export class HttpConnector implements IConnector {
    private http: Http;
    // constructor(http: Http) {
    //     this.http = http;
    // }
    constructor() {

    }

    public get(url: string): Promise {
        url = appHelper.config.baseUrl + url;
        let http: Http = window.ioc.resolve(Http);
        // let http: Http = appHelper.injector.get(Http);
        let def = PromiseFactory.create();
        http.get(url).map(this.handleData).subscribe(
            (data: any) => def.resolve(data),
            (error: any) => def.reject("reject")
        );
        return def;
    }

    private handleData(response: Response) {
        return response.json().data;
    }
}