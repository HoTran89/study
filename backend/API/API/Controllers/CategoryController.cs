using Api.common;
using Api.common.Exception;
using Api.Context;
using Api.Service;
using Api.Service.Impl;
using System;
using System.Collections.Generic;
using System.Web.Http;

namespace API.Controllers
{
    [RoutePrefix("api/categories")]
    public class CategoryController : ApiController
    {
        //[Route("")]
        //[HttpGet]
        //public IList<Category> GetCategories()
        //{
        //    ICategoryService categoryService = new CategoryService();
        //    return categoryService.GetCategories();
        //}

        [Route("")]
        [HttpGet]
        public IResponeData<IList<Category>> GetCategories()
        {
            IResponeData<IList<Category>> responeData = new ResponeData<IList<Category>>();
            try
            {
                ICategoryService categoryService = new CategoryService();
                var categories = categoryService.GetCategories();
                responeData.SetData(categories);
            }
            catch (Exception ex)
            {
                responeData.AddError("Error case");
            }
            return responeData;
        }


        [Route("login")]
        [HttpPost]
        public IResponeData<LoginResponse> Login(LoginRequest request)
        {
            IResponeData<LoginResponse> response = new ResponeData<LoginResponse>();
            try
            {
                ICategoryService categoryService = new CategoryService();
                LoginResponse loginResponse = categoryService.Login(request);
                response.SetData(loginResponse);
            }
            catch (ValidationException ex)
            {
                response.AddErrors(ex.Errors);
            }
            return response;
        }

        [Route("")]
        [HttpPost]
        public IResponeData<string> AddCategory([FromBody]Category category)
        {
            IResponeData<string> response = new ResponeData<string>();
            try
            {
                ICategoryService categoryService = new CategoryService();
                categoryService.CreateCategory(category);
            }
            catch (ValidationException exception)
            {
                response.AddErrors(exception.Errors);
            }
            return response;
        }
    }
}