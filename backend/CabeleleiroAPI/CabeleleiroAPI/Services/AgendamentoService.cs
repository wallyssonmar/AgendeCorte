using CabeleleiroAPI.Models;
using CabeleleiroAPI.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace CabeleleiroAPI.Services
{
    public class AgendamentoService
    {

        private readonly AgendamentoRepository _agendamentoRepository;
        public AgendamentoService(AgendamentoRepository agendamentoRepository) 
        {
            _agendamentoRepository = agendamentoRepository;
        }

        public async Task<Agendamento> ObterPorId(int id)
        {
            Agendamento? retorno = await _agendamentoRepository.ObterPorIdAsync(id);

            return retorno;
        }

        public async Task<List<Agendamento>> ListarAsync()
        {
            List<Agendamento> retorno = await _agendamentoRepository.ListarAsync();
            return retorno;
        }

        public async Task<Agendamento> IncluirAsync(Agendamento agendamento)
        {
            Agendamento retorno = await _agendamentoRepository.IncluirAsync(agendamento);
            
            return retorno;
        }

        internal async Task AlterarAsync(int id, Agendamento agendamento)
        {
            await _agendamentoRepository.AlterarAsync(id, agendamento);
        }

        internal async Task ExcluirAsync(int id)
        {
            await _agendamentoRepository.ExcluirAsync(id);
        }
    }
}
