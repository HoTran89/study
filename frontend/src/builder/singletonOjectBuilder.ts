import { IObjectBuilder } from "./iObjectBuilder";

export class SingletonOjectBuilder implements IObjectBuilder {
    private object: any;
    constructor(object: any) {
        this.object = object;
    }
    public build(): void {
        let instanceFn = !this.object.instanceFn ? new this.object.instance() : this.object.instanceFn;
        this.object.instanceFn = instanceFn;
        return this.object.instanceFn;
    }
}