namespace CabeleleiroAPI.Models
{
    public class Corte
    {
        public int Id { get; set; }
        public required string Name { get; set; }
        public double price { get; set; }

        public List<Agendamento> Agendamentos { get; set; } = [];
    }
}
