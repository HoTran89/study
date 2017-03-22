using Api.Context;
using System.Collections.Generic;

namespace Api.Service
{
    public interface ICategoryService
    {
        IList<Category> GetCategories();
        void CreateCategory(Category category);
        LoginResponse Login(LoginRequest request);
    }
}