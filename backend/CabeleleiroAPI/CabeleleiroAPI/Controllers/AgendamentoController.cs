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
            List<Agendamento> retorno = await agendamentoService.ListarAsync();

            return retorno;
        }

        [HttpPost]
        public async Task<ActionResult<Agendamento>> IncluirAsync([FromBody] Agendamento agendamento)
        {
            Agendamento retorno = await agendamentoService.IncluirAsync(agendamento);
            return retorno;
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> AlterarAsync(int id, [FromBody] Agendamento agendamento)
        {
            await agendamentoService.AlterarAsync(id, agendamento);
            return NoContent();
        }



        [HttpDelete("{id}")]
        

        public async Task<ActionResult> ExcluirAsync(int id)
        {
            await agendamentoService.ExcluirAsync(id);
            return NoContent();
        }
    }
}
