using Microsoft.AspNetCore.Mvc;
using System.IdentityModel.Tokens.Jwt;

namespace DotNetNoteCom.Controllers
{
    [Produces("application/json")]
    [Route("api/WebApiJwt")]
    public class WebApiJwtController : Controller
    {
        [HttpPost]
        public JwtDto Post()
        {
            var jst = new JwtSecurityToken();
            var token = new JwtSecurityTokenHandler().WriteToken(jst);

            return new JwtDto() { Token = token, Username = "RedPlus" };
        }
    }

    public class JwtDto
    {
        public string Token { get; set; }
        public string Username { get; set; }
    }

    public class SignBase
    {
        public string Username { get; set; }
        public string Password { get; set; }
    }
}
