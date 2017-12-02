using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITWEB6.Dtos
{
    public class ExerciseDto
    {
    public int Id { get; set; }
    public string Name { get; set; }
    public string Description { get; set; }
    public int Repetitions { get; set; }
    public int Sets { get; set; }
    public bool IsRepetition { get; set; }
    public double Time { get; set; }
  }
}
