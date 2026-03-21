namespace CabeleleiroAPI.Models
{
    public class Profissional
    {
        public int Id { get; set; }
        public string Name { get; set; }

        public List<Agendamento> Agendamentos { get; set; } = [];
    }
}
