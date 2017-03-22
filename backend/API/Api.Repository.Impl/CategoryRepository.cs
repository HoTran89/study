using Api.Context;
using System.Collections.Generic;
using System.Linq;
using System;

namespace Api.Repository.Impl
{
    public class CategoryRepository : ICategoryRepository
    {
        public Context.DbContext context;
        public CategoryRepository()
        {
            this.context = new Context.DbContext();
        }

        public void Create(Category category)
        {
            this.context.Categories.Add(category);
            this.context.SaveChanges();
        }

        public IList<Category> GetCategories()
        {
            return this.context.Categories.ToList();
        }

        public Category getCategoryByName(string name)
        {
            return this.context.Categories.Where(item => item.Name == name).FirstOrDefault();
        }
    }
}