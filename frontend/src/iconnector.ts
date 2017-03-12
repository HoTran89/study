import { Promise } from "./promise";

export interface IConnector {
    get(url: string): Promise;
}
