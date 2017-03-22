using System;
using System.Collections.Generic;

namespace Api.common
{
    public class ResponeData<TData> : IResponeData<TData>
    {
        public TData Data { get; set; }
        public IList<string> Errors { get; set; }

        public ResponeData()
        {
            this.Errors = new List<string>();
        }
        public void AddError(string errorKey)
        {
            this.Errors.Add(errorKey);
        }

        public void SetData(TData item)
        {
            this.Data = item;
        }

        public void AddErrors(IList<string> errorKeys)
        {
            foreach (string error in errorKeys)
            {
                this.AddError(error);
            }
        }
    }
}
