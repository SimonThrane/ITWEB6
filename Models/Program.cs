using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITWEB6.Models
{
    public class Program
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public List<ProgramExercise> ProgramExercises { get; set; }
        public string Creater { get; set; }
        public string Category { get; set; }
        public DateTime CreateDate { get; set; }
        public ApplicationUser ApplicationUser { get; set; }
        public string ApplicationUserId { get; set; }
    }
}
