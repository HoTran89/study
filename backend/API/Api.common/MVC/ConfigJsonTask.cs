namespace Api.common.MVC
{
    using Newtonsoft.Json.Serialization;
    using System.Web.Http;

    public class ConfigJsonTask : IOnApplicationStarted
    {
        public void Execute()
        {
            var formatters = GlobalConfiguration.Configuration.Formatters;
            var jsonFormatter = formatters.JsonFormatter;
            var settings = jsonFormatter.SerializerSettings;
            settings.ContractResolver = new CamelCasePropertyNamesContractResolver();
        }
    }
}
