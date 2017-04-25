using Api.common.IoC;

namespace Api.Repository.Impl
{
    public class Bootstrap : IBootstrap
    {
        public void Execute()
        {
            IoCContainer.Register<ICategoryRepository, CategoryRepository>();
        }
    }
}