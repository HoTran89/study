import { IObjectBuilder } from "./iObjectBuilder";

export class TransientObjectBuilder implements IObjectBuilder {
    private object: any;
    constructor(object: any) {
        this.object = object;
    }
    public build(): void {
        return new this.object.instance();
    }
}