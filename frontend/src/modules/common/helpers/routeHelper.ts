import urlHelper from "./urlHelper";

let routeHelper = {
    getModuleRoutes: getModuleRoutes
}

function getModuleRoutes(modules: Array<any>) {
    let routes: any = [];
    modules.forEach((module: string) => {
        routes.push({ path: module, loadChildren: urlHelper.resolveModule(module) })
    })
    console.log(routes);
    return routes;
}
export default routeHelper;