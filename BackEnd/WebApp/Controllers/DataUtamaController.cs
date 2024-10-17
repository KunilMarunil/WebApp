using Microsoft.AspNetCore.Mvc;
using WebApp.Models;
using WebApp.Views;

namespace WebApp.Controllers
{
    [Route("DataUtama")]
    [ApiController]
    public class DataUtamaController : Controller
    {
        [HttpGet]
        public IActionResult GetPostingan(int id)
        {
            try
            {
                List<DataUtama> data = new List<DataUtama>();
                data = DataUtamaView.SelectDataUtama(id);
                return Ok(data);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        //[HttpPut]
        //public IActionResult UpdateChecklistItemStatus(string Judul, int IDPostingan)
        //{
        //    try
        //    {
        //        PostView.UpdatePostItem(Judul, IDPostingan);
        //        return Ok();
        //    }
        //    catch (Exception ex)
        //    {
        //        return BadRequest(ex.Message);
        //    }
        //}
    }
}
