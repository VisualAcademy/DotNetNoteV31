using DotNetNote.Models;
using Microsoft.AspNetCore.Mvc;

namespace DotNetNote.Controllers
{
    public class DemoController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        /// <summary>
        /// Content() ��ȯ��
        /// </summary>
        /// <returns></returns>
        public IActionResult ContentResultDemo()
        {
            return Content("ContentResult ��ȯ��");
        }

        public IActionResult ObjectResultDemo()
        {
            DemoModel dm = new DemoModel() { Id = 1, Name = "ȫ�浿" };
            return new ObjectResult(dm);
        }

        public IActionResult TempDataDemoStart()
        {
            TempData["Message"] = "TempDataDemoStart���� ������� ���ڿ�";

            return View("TempDataDemo");
        }

        public IActionResult TempDataDemo()
        {
            return View();
        }

        public IActionResult JsonResultDemo()
        {
            return Json(new { Foo = "Bar" });
        }

        public string SendMailDemo()
        {
            return "���� �Ϸ�";
        }

        public IActionResult EnvironmentAndFramework()
        {
            return View();
        }
        
        public IActionResult RedirectPermanentDemo()
        {
            return RedirectPermanent("/");
        }
    }
}
