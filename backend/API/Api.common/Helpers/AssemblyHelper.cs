namespace Api.common.Helpers
{
    using System;
    using System.Collections.Generic;
    using System.Linq;
    using System.Reflection;

    public class AssemblyHelper
    {
        public static void Execute<IInterface>() where IInterface : ITask
        {
            IList<string> dlls = FileHelpers.GetFilesName(AppConst.PROJECT_NAMESPACE_PREFIX);

            IEnumerable<Type> bootstraps = new List<Type>();
            foreach (string dll in dlls)
            {
                var bootstrapsInDll = Assembly.Load(dll).GetTypes().Where(
                    type => type.IsClass && !type.IsAbstract && typeof(IInterface).IsAssignableFrom(type)
                    ).ToList();
                bootstraps = bootstraps.Concat(bootstrapsInDll);
            }

            foreach (Type type in bootstraps)
            {
                ITask bootstrapInstance = Activator.CreateInstance(type) as ITask;
                bootstrapInstance.Execute();
            }
        }
    }
}
