using Microsoft.AspNetCore.Mvc;

[Route("api/[Controller]/[Action]")]
[ApiController]

public class shortnerURLController : ControllerBase
{
    [HttpGet]
    public IActionResult shortenURL(string longURL)
    {
        if (string.IsNullOrEmpty(longURL))
        {
            return BadRequest("please Enter a long URL");
        }
        try
        {
            System.Uri address = new System.Uri("http://tinyurl.com/api-create.php?url=" + longURL);
            System.Net.WebClient client = new System.Net.WebClient();
            string tinyURL = client.DownloadString(address);
            return Ok(tinyURL);
        }
        catch (Exception ex)
        {
            return StatusCode(StatusCodes.Status400BadRequest, ex.Message);
        }



    }


}