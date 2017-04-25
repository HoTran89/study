import { Http } from "@angular/http";
import helperFacade from "../../common/index";
import { IoCLifeCycle } from "./enum";
import { IObjectBuilder } from "./builder/iObjectBuilder";
import { SingletonOjectBuilder } from "./builder/singletonOjectBuilder";
import { TransientObjectBuilder } from "./builder/transientObjectBuilder";

export class IoCFactory {
    public static create(): IocContainer {
        return new IocContainer();
    }
}

export class IocContainer {
    private registration: Array<any>;
    constructor() {
        this.registration = [];
    }
    public import(registration: Array<any>) {
        this.registration = registration;
    }
    public registers(registrations: Array<any>) {
        if (!registrations || registrations.length <= 0) {
            return;
        }
        let self: IocContainer = this;
        registrations.forEach((item: any) => {
            self.registration.push(item);
        })
    }
    public resolve(obj: any): any {
        if (typeof obj === "function") {
            return this.resolveAngularObject(obj);
        }
        let declaration = this.registration.firstOrDefault((item: any) => { return item.name == obj; });
        let objecBuilder: IObjectBuilder = this.getObjectBuilder(declaration);
        return objecBuilder.build();
    }

    private resolveAngularObject(object: any) {
        return helperFacade.appHelper.injector.get(Http);
    }

    private getObjectBuilder(declaration: any): IObjectBuilder {
        switch (declaration.lifeCycle) {
            case IoCLifeCycle.Singleton:
                return new SingletonOjectBuilder(declaration);
            case IoCLifeCycle.Transient:
                return new TransientObjectBuilder(declaration);

        }
    }
}