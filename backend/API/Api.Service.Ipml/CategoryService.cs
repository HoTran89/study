using Api.Context;
using Api.Repository;
using Api.Repository.Impl;
using System.Collections.Generic;
using Api.common.Exception;
using Api.common.IoC;

namespace Api.Service.Impl
{
    public class CategoryService : ICategoryService
    {
        public void CreateCategory(Category category)
        {
            ValidationCreateRquest(category);
            //ICategoryRepository categoryRepository = new CategoryRepository();
            ICategoryRepository categoryRepository = IoCContainer.Resolve<ICategoryRepository>();
            categoryRepository.Create(category);
        }

        private void ValidationCreateRquest(Category category)
        {
            var validation = new ValidationException();
            if (string.IsNullOrWhiteSpace(category.Name))
            {
                validation.AddError("category.create.nameIsRequired");
            }
            if (string.IsNullOrWhiteSpace(category.Thumbnail))
            {
                validation.AddError("category.create.thumbNailIsRequired");
            }
            validation.ThrowIfHasError();
        }

        public IList<Category> GetCategories()
        {
            //ICategoryRepository categoryRepository = new CategoryRepository();
            ICategoryRepository categoryRepository = IoCContainer.Resolve<ICategoryRepository>();
            return categoryRepository.GetCategories();
        }

        public LoginResponse Login(LoginRequest request)
        {
            ICategoryRepository categoryRepository = IoCContainer.Resolve<ICategoryRepository>();
            Category category = categoryRepository.getCategoryByName(request.Name);
            if (category != null)
            {
                LoginResponse loginResponse = new LoginResponse(category.Name, category.Thumbnail);
                return loginResponse;
            }
            throw new ValidationException("login error");
        }
    }

}