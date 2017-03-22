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
    public resolve(name: string): any {
        let declaration = this.registration.firstOrDefault((item: any) => { return item.name == name; });
        let objecBuilder: IObjectBuilder = this.getObjectBuilder(declaration);
        return objecBuilder.build();

        // if (declaration.lifeCycle == IoCLifeCycle.Transient) {
        //     return new declaration.instance();
        // }

        // if (declaration.lifeCycle == IoCLifeCycle.Singleton) {
        //     let instanceFn = !declaration.instanceFn ? new declaration.instance() : declaration.instanceFn;
        //     declaration.instanceFn = instanceFn;
        //     return declaration.instanceFn;
        // }

        // return new declaration.instance();
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