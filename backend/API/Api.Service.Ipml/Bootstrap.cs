namespace Api.Service.Ipml
{
    using Api.common.IoC;
    using Api.Service.Impl;

    public class Bootstrap : IBootstrap
    {
        public void Execute()
        {
            IoCContainer.Register<ICategoryService, CategoryService>();
        }
    }
}