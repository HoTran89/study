using Api.common.Exception;
using System.Net;
using System.Net.Http;
using System.Web.Http.Filters;

namespace Api.common.Attributes
{
    public class ResponseWapper : ActionFilterAttribute
    {
        public override void OnActionExecuted(HttpActionExecutedContext actionExecutedContext)
        {
            IResponeData<IEntity> response = new ResponeData<IEntity>();
            if (actionExecutedContext.Exception != null && actionExecutedContext.Exception is ValidationException)
            {
                response.AddErrors(((ValidationException)(actionExecutedContext.Exception)).Errors);
                actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(HttpStatusCode.BadRequest, response);
            }

            if (actionExecutedContext.Exception == null)
            {
                var actionResponse = (System.Net.Http.ObjectContent)actionExecutedContext.Response.Content;
                response.SetData(actionResponse.Value as IEntity);
                actionExecutedContext.Response = actionExecutedContext.Request.CreateResponse(HttpStatusCode.OK, response);
            }
        }
    }
}
