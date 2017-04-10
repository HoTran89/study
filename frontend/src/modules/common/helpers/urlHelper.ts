import appHelper from "./appHelper";

let urlHelper = {
    resolveModule: resolveModule,
    resolveResource: resolveResource
}

export default urlHelper;

function resolveModule(name: string) {
    return String.format("./src/modules/{0}/{0}Module#{1}Module", name, String.toPascal(name));
}

function resolveResource(name: string) {
    return appHelper.config.locale + name + ".json";
}