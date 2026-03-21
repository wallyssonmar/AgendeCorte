namespace CabeleleiroAPI.Models
{
    public class Agendamento
    {
        public int Id { get; set; }
        public required Corte Corte { get; set; }
        public int CorteId { get; set; }

        public required Profissional Profissional { get; set; }

        public int ProfissionalId { get; set; }

        public DateTime DataConfirmacao { get; set; }
        public DateOnly Data {  get; set; }
        public TimeOnly Horario { get; set; }

    }
}
