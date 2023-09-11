using Microsoft.AspNetCore.Mvc;

[Route("api/[Controller]")]
[ApiController]

public class SampleController : ControllerBase
{
    [HttpGet]
    public IActionResult Get()
    {
        return Ok(new {message = "Hello From Backend"});
    }
}