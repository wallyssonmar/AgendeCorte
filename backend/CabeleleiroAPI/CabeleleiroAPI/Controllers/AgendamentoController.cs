using CabeleleiroAPI.Models;
using CabeleleiroAPI.Services;
using Microsoft.AspNetCore.Mvc;

namespace CabeleleiroAPI.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class AgendamentoController(AgendamentoService agendamentoService): ControllerBase
    {
        private readonly AgendamentoService agendamentoService = agendamentoService;

        [HttpGet]
        public async Task<ActionResult<List<Agendamento>>> ListarAsync()
        {
            try
            {
                List<Agendamento> retorno = await agendamentoService.ListarAsync();

                return retorno;
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
            
        }

        [HttpPost]
        public async Task<ActionResult<Agendamento>> IncluirAsync([FromBody] Agendamento agendamento)
        {
            try
            {
                Agendamento retorno = await agendamentoService.IncluirAsync(agendamento);
                return Ok(new
                {
                    retorno.Id,
                    retorno.Data,
                    retorno.Horario,
                    Profissional = new
                    {
                        retorno.Profissional.Name
                    }
                });
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
            
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> AlterarAsync(int id, [FromBody] Agendamento agendamento)
        {
            try
            {
                await agendamentoService.AlterarAsync(id, agendamento);
                return NoContent();
            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
            
        }



        [HttpDelete("{id}")]
        

        public async Task<ActionResult> ExcluirAsync(int id)
        {

            try
            {   
              await agendamentoService.ExcluirAsync(id);
              return NoContent();

            }
            catch (Exception ex)
            {

                return BadRequest(ex.Message);
            }
            
        }
    }
}
