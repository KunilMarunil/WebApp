using Microsoft.AspNetCore.Mvc;

namespace WebApp.Controllers
{
    [Route("Data Pungutan")]
    [ApiController]
    public class DataPungutanController : Controller
    {
        [HttpGet]
        public IActionResult GetPostingan()
        {
            try
            {
                List<Postingan> data = new List<Postingan>();
                data = PostView.SelectPostItem();
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPut]
        public IActionResult UpdateChecklistItemStatus(string Judul, int IDPostingan)
        {
            try
            {
                PostView.UpdatePostItem(Judul, IDPostingan);
                return Ok();
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}
