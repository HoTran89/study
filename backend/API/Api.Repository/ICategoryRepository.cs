using Api.Context;
using System.Collections.Generic;

namespace Api.Repository
{
    public interface ICategoryRepository
    {
        IList<Category> GetCategories();
        void Create(Category category);
        Category getCategoryByName(string name);
    }
}