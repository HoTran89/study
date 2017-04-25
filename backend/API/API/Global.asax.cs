using System.Web.Http;
using Api.common.App;

namespace API
{
    public class WebApiApplication : System.Web.HttpApplication
    {
        IApplication app;

        public WebApiApplication()
        {

            this.app = new Api.common.App.WebApiApplication();
        }
        protected void Application_Start()
        {

            GlobalConfiguration.Configure(WebApiConfig.Register);
            //var formatters = GlobalConfiguration.Configuration.Formatters;
            //var jsonFormatter = formatters.JsonFormatter;
            //var settings = jsonFormatter.SerializerSettings;
            //settings.ContractResolver = new CamelCasePropertyNamesContractResolver();

            //Api.common.IoC.Castle.Bootstrap.Init();
            //Api.Repository.Impl.Bootstrap.RegisterIoC();
            //Api.Service.Ipml.Bootstrap.RegisterIoC();

            //InitBootstrap();

            this.app.Start();
            //AssemblyHelper.Execute<Api.common.IOnApplicationStarted>();
            //AssemblyHelper.Execute<IBootstrap>();
        }

        //private void InitBootstrap()
        //{
        //    IList<string> dlls = FileHelpers.GetFilesName(AppConst.PROJECT_NAMESPACE_PREFIX);

        //    IEnumerable<Type> bootstraps = new List<Type>();
        //    foreach (string dll in dlls)
        //    {
        //        var bootstrapsInDll = Assembly.Load(dll).GetTypes().Where(
        //            type => type.IsClass && !type.IsAbstract && typeof(IBootstrap).IsAssignableFrom(type)
        //            ).ToList();
        //        bootstraps = bootstraps.Concat(bootstrapsInDll);                
        //    }

        //    foreach (Type type in bootstraps)
        //    {
        //        IBootstrap bootstrapInstance = Activator.CreateInstance(type) as IBootstrap;
        //        bootstrapInstance.Execute();
        //    }
        //}
    }
}
