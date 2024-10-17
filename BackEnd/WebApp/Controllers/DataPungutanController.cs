using Microsoft.AspNetCore.Mvc;
using WebApp.Models;
using WebApp.Views;

namespace WebApp.Controllers
{
    [Route("DataPungutan")]
    [ApiController]
    public class DataPungutanController : Controller
    {
        [HttpGet]
        public IActionResult SelectDataPungutan(int id)
        {
            try
            {
                List<DataPungutan> data = new List<DataPungutan>();
                data = DataPungutanView.SelectDataPungutan(id);
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
