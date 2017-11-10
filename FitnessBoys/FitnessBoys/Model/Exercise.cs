using System.Collections.Generic;

namespace FitnessBoys.Model
{
    public class Exercise
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public int Repetitions { get; set; }
        public int Sets { get; set; }
        public bool IsRepetition { get; set; }
        public double Time { get; set; }
        public List<Program> Programs { get; set; }
    }
}