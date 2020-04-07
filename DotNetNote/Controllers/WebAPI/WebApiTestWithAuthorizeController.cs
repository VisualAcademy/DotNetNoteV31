using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace DotNetNote.Controllers
{
    //[1] 인증된 사용자만 Web API에 접근하도록 설정 
    [Authorize]
    [Route("api/[controller]")]
    public class WebApiTestWithAuthorizeController : Controller
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            return new string[] {
                "[Authorize] 특성을 적용하면,"
                , "인증되지 않았을 때 로그인 페이지로 이동합니다." };
        }
    }

    //[2] 세션 값이 있는 사용자만 Web API 호출
    [Route("api/[controller]")]
    public class WebApiTestWithSessionController : Controller
    {
        [HttpGet]
        public IEnumerable<string> Get()
        {
            // 로그인한 사용자의 UserId를 세션에서 읽어오기
            string username = HttpContext.Session.GetString("Username");
            if (username != null)
            {
                return new string[] { "로그인 아이디: ", username };
            }
            else
            {
                return new string[] { "로그인 세션이 없으면", "로그인 페이지로 이동합니다." };
            }
        }
    }
}
