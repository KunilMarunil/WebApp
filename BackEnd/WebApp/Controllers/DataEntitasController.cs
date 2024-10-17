using Microsoft.AspNetCore.Mvc;
using WebApp.Models;
using WebApp.Views;

namespace WebApp.Controllers
{
    [Route("DataEntitas")]
    [ApiController]
    public class DataEntitasController : Controller
    {
        [HttpGet]
        public IActionResult SelectDataEntitas(int id)
        {
            try
            {
                List<DataEntitas> data = new List<DataEntitas>();
                data = DataEntitasView.SelectDataEntitas(id);
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
