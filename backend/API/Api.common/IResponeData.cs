using System.Collections.Generic;

namespace Api.common
{
    public interface IResponeData<TData>
    {
        void SetData(TData item);
        void AddError(string errorKey);
        void AddErrors(IList<string> errorKeys);
    }
}
