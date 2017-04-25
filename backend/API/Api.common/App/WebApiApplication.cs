using Api.common.Helpers;
using Api.common.IoC;
using System;

namespace Api.common.App
{
    public class WebApiApplication : IApplication
    {
        public void Start()
        {
            AssemblyHelper.Execute<Api.common.IOnApplicationStarted>();
            AssemblyHelper.Execute<IBootstrap>();
        }
    }
}
