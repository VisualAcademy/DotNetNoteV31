using System.Collections.Generic;
using System.IO;
using System.Net.Http.Headers;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace DotNetNoteCom.Controllers
{
    [Route("api/[controller]")]
    public class WebApiFileUploadController : Controller
    {
        private readonly IWebHostEnvironment _environment;

        public WebApiFileUploadController(IWebHostEnvironment environment)
        {
            _environment = environment;
        }

        [HttpPost]
        [Consumes("application/json", "multipart/form-data")]
        // files 매개변수 이름은 <input type="file" name="files" /> 
        public async Task<IActionResult> Post(ICollection<IFormFile> files)
        {
            // 파일을 업로드할 폴더
            var uploadFolder = Path.Combine(_environment.WebRootPath, "files");

            foreach (var file in files)
            {
                if (file.Length > 0)
                {
                    // 파일명 
                    var fileName = Path.GetFileName(ContentDispositionHeaderValue.Parse(file.ContentDisposition).FileName.Trim('"'));

                    using (var fileStream = new FileStream(Path.Combine(uploadFolder, fileName), FileMode.Create))
                    {
                        await file.CopyToAsync(fileStream);
                    }
                }
            }

            return Ok(new { message = "OK" });
        }
    }
}
