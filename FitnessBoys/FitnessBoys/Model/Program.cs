using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace FitnessBoys.Model
{
    public class Program
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<Exercise> Exercises { get; set; }
        public string Creater { get; set; }
        public DateTime CreateDate { get; set; }
        
    }

    public class ProgramExercise
    {
        public int Id { get; set; }
        public Program Program { get; set; }
        public Exercise Exercise { get; set; }

    }


}
