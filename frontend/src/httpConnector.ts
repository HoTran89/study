import { Injectable } from "@angular/core";
import { Promise, PromiseFactory } from "./promise";
import { Http, Response } from "@angular/http";
import { IConnector } from "./iconnector";

// @Injectable()
export class HttpConnector {
    private http: Http;
    // constructor(http: Http) {
    //     this.http = http;
    // }
    constructor() {

    }

    public get(url: string): Promise {
        let def = PromiseFactory.create();
        def.resolve([
            {
                "id": "1", "name": "name 1", "key": "key 1", "description": "description 1", "avatar": "img.jpg"
            }
        ])
        return def;
        // this.http.get(url).map(this.handleData).subscribe(
        //     (data: any) => def.resolve(data),
        //     (error: any) => def.reject("reject")
        // );
        // return def;
    }

    private handleData(response: Response) {
        return response.json();
    }
}