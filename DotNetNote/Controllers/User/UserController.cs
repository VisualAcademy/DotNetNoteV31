//[User][6]
using DotNetNote.Common;
using DotNetNote.Components;
using DotNetNote.Models;
using Microsoft.AspNetCore.Authentication;
using Microsoft.AspNetCore.Authentication.Cookies;
using Microsoft.AspNetCore.Authentication.OpenIdConnect;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Security.Claims;
using System.Threading.Tasks;

namespace DotNetNote.Controllers
{
    public class UserController : Controller
    {
        //[User][6][1]
        private IUserRepository _repository;
        private ILoginFailedManager _loginFailed;
        private IUserModelRepository _userRepo;

        public UserController(
            IUserRepository repository, 
            ILoginFailedManager loginFailed, 
            IUserModelRepository userRepo)
        {
            _repository = repository;
            _loginFailed = loginFailed;
            _userRepo = userRepo; // �߰� 
        }        

        //[User][6][2]
        [Authorize]
        public IActionResult Index() => View();


        //[User][6][3] : ȸ�� ���� ��
        [HttpGet]
        public IActionResult Register() => View();

        //[User][6][4] : ȸ�� ���� ó��
        [HttpPost]
        [ValidateAntiForgeryToken]
        public IActionResult Register(UserViewModel model)
        {
            if (ModelState.IsValid)
            {
                if (_repository.GetUserByUserId(model.UserId).UserId != null)
                {
                    ModelState.AddModelError("", "�̹� ���Ե� ������Դϴ�.");
                    return View(model);
                }
            }

            if (!ModelState.IsValid)
            {
                ModelState.AddModelError("", "�߸��� ���� �õ�!!!");
                return View(model);
            }
            else
            {
                //_repository.AddUser(model.UserId, model.Password);
                _repository.AddUser(model.UserId, Common.CryptorEngine.EncryptPassword(model.Password)
                );
                return RedirectToAction("Index");
            }
        }


        //[User][6][5] : �α��� ��
        [HttpGet]
        [AllowAnonymous] // �������� ���� ����ڵ� ���� ����
        public IActionResult Login(string returnUrl = null)
        {
            ViewData["ReturnUrl"] = returnUrl;
            return View();
        }





        //[User][6][6] : �α��� ó��
        [HttpPost]
        [AllowAnonymous]
        public async Task<IActionResult> Login(
            UserViewModel model, string returnUrl = null)
        {
            if (ModelState.IsValid)
            {
                //[!] �α��� ���� 5�� üũ
                if (_loginFailed.IsLoginFailed(model.UserId))
                {
                    ViewBag.IsLoginFailed = true; 
                    return View(model);
                }

                //if (_repository.IsCorrectUser(model.UserId, model.Password))
                if (_repository.IsCorrectUser(model.UserId, Common.CryptorEngine.EncryptPassword(model.Password)))
                {
                    //[!] ���� �ο�: ������ ������� �ֿ� ����(Name, Role, ...)�� ���
                    var claims = new List<Claim>()
                    {
                        // �α��� ���̵� ����
                        new Claim("UserId", model.UserId),

                        new Claim(ClaimTypes.NameIdentifier, model.UserId),

                        new Claim(ClaimTypes.Name, model.UserId), 
                        //new Claim(ClaimTypes.Email, model.UserId), //

                        // �⺻ ���� ����, "Role" ��ɿ� "Users" �� �ο�
                        new Claim(ClaimTypes.Role, "Users") // �߰� ���� ���
                    };

                    //var ci = new ClaimsIdentity(claims, Common.CryptorEngine.EncryptPassword(model.Password));
                    var ci = new ClaimsIdentity(claims, CookieAuthenticationDefaults.AuthenticationScheme);

                    //[1] �α��� ó��: Authorize Ư�� ����ؼ� �α��� üũ ���� 
                    //[1][1] ASP.NET Core 1.X ���: �������Ǹ鼭 �Ʒ� �޼��� ��� ���� 
                    //await HttpContext.Authentication.SignInAsync(
                    //    "Cookies", new ClaimsPrincipal(ci));
                    //[1][2] ASP.NET Core 2.X ���
                    var authenticationProperties = new AuthenticationProperties()
                    {
                        ExpiresUtc = DateTimeOffset.UtcNow.AddMinutes(60),
                        IssuedUtc = DateTimeOffset.UtcNow,
                        IsPersistent = true 
                    };
                    //await HttpContext.SignInAsync("Cookies", new ClaimsPrincipal(ci), new AuthenticationProperties { IsPersistent = true });
                    //await HttpContext.SignInAsync("Cookies", new ClaimsPrincipal(ci), authenticationProperties);
                    //await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme, new ClaimsPrincipal(ci)); // �⺻
                    await HttpContext.SignInAsync(CookieAuthenticationDefaults.AuthenticationScheme
                        , new ClaimsPrincipal(ci), authenticationProperties); // �ɼ�
                    

                    ////[����] ASP.NET Core Identity���� �α����ϴ� ���
                    //var identity = new ClaimsIdentity("Cookies");
                    //identity.AddClaim(new Claim(ClaimTypes.NameIdentifier, user.Id));
                    //identity.AddClaim(new Claim(ClaimTypes.Name, user.UserName));

                    //await HttpContext.SignInAsync("Cookies", new ClaimsPrincipal(identity));



                    // �߰�: ���ǿ� �α��� ����� ���� ����
                    // ���� ���� �α���
                    HttpContext.Session.SetString("Username", model.UserId);


                    return LocalRedirect("/User/Index");
                }
            }

            return View(model);
        }


        //[User][6][7]: �α׾ƿ� ó��
        public async Task<IActionResult> Logout()
        {
            #region Old Version
            // Startup.cs�� �̵����� ������ "Cookies" �̸� ���
            // ASP.NET Core 1.X
            //await HttpContext.Authentication.SignOutAsync("Cookies");
            // ASP.NET Core 2.X
            //await HttpContext.SignOutAsync("Cookies"); 
            #endregion

            await HttpContext.SignOutAsync(CookieAuthenticationDefaults.AuthenticationScheme); // ��Ű ���� �α׾ƿ�
            await HttpContext.SignOutAsync(OpenIdConnectDefaults.AuthenticationScheme); // ��ū ���� �α׾ƿ� 
            HttpContext.Session.Clear(); // ���� ���� �α׾ƿ�

            return Redirect("/User/Index");
        }


        //[User][6][8] : ȸ�� ���� ���� �� ����
        [Authorize]
        public IActionResult UserInfor() => View();

        //[User][6][9] : �λ縻 ������
        public IActionResult Greetings()
        {
            //[Authorize] Ư���� �� �ٸ� ǥ�� ���
            // �������� ���� ����ڴ�
            if (User.Identity.IsAuthenticated == false)
            {
                // �α��� �������� ���𷺼�
                return new ChallengeResult();
            }

            return View();
        }

        //[User][6][10] : ���� �ź� ������
        public IActionResult Forbidden() => View();

        //[!] �߰�: ����� �� ����(GetUsers ���� ���ν��� ���)
        [Authorize]
        public IActionResult UserDetail()
        {
            string userId = User.FindFirst("UserId").Value;
            var user = _repository.GetUserByUserId(userId);

            //var userModel = _userRepo.GetUserInfor(user.Id); // ĳ�� ���� ��
            var userModel = _userRepo.GetUserInforCache(user.Id); // ĳ�� ���� ��

            return View(userModel); 
        }

        /// <summary>
        /// ���̵� �ߺ� Ȯ�� Web API �׽�Ʈ
        /// </summary>
        public IActionResult CheckUsername() => View();
    }
}
