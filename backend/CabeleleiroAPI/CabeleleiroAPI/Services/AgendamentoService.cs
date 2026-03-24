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

            Agendamento? registroNoBanco = await _agendamentoRepository.ObterPorIdAsync(id);
            if (registroNoBanco == null) 
            {
                throw new Exception("Id não encontrado");
            }

            await _agendamentoRepository.AlterarAsync(registroNoBanco, agendamento);

        }

        internal async Task ExcluirAsync(int id)
        {

            Agendamento? registroNoBanco = await _agendamentoRepository.ObterPorIdAsync(id);
            if (registroNoBanco == null)
            {
                throw new Exception("Id não encontrado");
            }

            await _agendamentoRepository.ExcluirAsync(registroNoBanco);
        }
    }
}
