import { Injectable } from "@angular/core";
import { Promise, PromiseFactory } from "./promise";
import { Http, Response } from "@angular/http";
import { IConnector } from "./iconnector";
import "rxjs/add/operator/map";
import appHelper from "./appHelper";

// @Injectable()
export class HttpConnector implements IConnector {
    private http: Http;
    // constructor(http: Http) {
    //     this.http = http;
    // }
    constructor() {

    }

    public get(url: string): Promise {
        let http: Http = appHelper.injector.get(Http);
        let def = PromiseFactory.create();
        // def.resolve([
        //     {
        //         "id": "1", "name": "name 1", "key": "key 1", "description": "description 1", "avatar": "img.jpg"
        //     }
        // ])
        // return def;
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