namespace Api.common.IoC
{
    public interface IContainer
    {
        void Register<IInstance, Instance>()
            where IInstance : class
            where Instance : IInstance;
        IInstance Resolve<IInstance>() where IInstance : class;
    }
}