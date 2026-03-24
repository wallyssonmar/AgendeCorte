using CabeleleiroAPI.Data;
using CabeleleiroAPI.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.ChangeTracking;

namespace CabeleleiroAPI.Repositories
{
    public class AgendamentoRepository
    {
        private readonly AgendamentoApiContext _context;
        public AgendamentoRepository(AgendamentoApiContext context)
        {
            _context = context;
        }

        public async Task<List<Agendamento>> ListarAsync()
        {
            List<Agendamento> retorno = await _context.Agendamentos.ToListAsync();
            return retorno;
        }

        public async Task<Agendamento> IncluirAsync(Agendamento agendamento)
        {
            EntityEntry<Agendamento> retorno = await _context.Agendamentos.AddAsync(agendamento);
            await _context.SaveChangesAsync();

            return retorno.Entity;
        }

        internal async Task ExcluirAsync(Agendamento agendamento)
        {
            _context.Remove(agendamento);
            await _context.SaveChangesAsync();
        }

        internal async Task AlterarAsync(Agendamento registroNoBanco, Agendamento agendamento)
        {
            _context.Entry(registroNoBanco).CurrentValues.SetValues(agendamento);
            await _context.SaveChangesAsync();
        }

        internal async Task<Agendamento?> ObterPorIdAsync(int id)
        {
            Agendamento? registroNoBanco = await _context.Agendamentos.FindAsync(id);
            return registroNoBanco;
        }
    }
}
