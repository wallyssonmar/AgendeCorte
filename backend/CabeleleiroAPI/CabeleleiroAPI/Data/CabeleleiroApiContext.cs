using CabeleleiroAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace CabeleleiroAPI.Data
{
    public class CabeleleiroApiContext: DbContext
    {
        public CabeleleiroApiContext(DbContextOptions<CabeleleiroApiContext> opt): base(opt)
        {
            
        }

        public DbSet<Agendamento> Agendamentos { get; set; }
        public DbSet<Corte> Cortes { get; set; }
        public DbSet<Profissional> Profissionals { get; set; }

        /*protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
        }*/
      
    }
}
