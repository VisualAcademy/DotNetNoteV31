using Microsoft.AspNetCore.Mvc;

namespace DotNetNote.Controllers
{
    // [Route()] Ư���� ����� ��Ʈ����Ʈ �����
    [Route("RouteDemo")]
    public class RouteDemoController
    {
        [Route(""), Route("Index")]
        public string Index()
        {
            return "��Ʈ����Ʈ �����";
        }
    }
}
