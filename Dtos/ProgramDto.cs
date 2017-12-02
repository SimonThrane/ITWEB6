using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using ITWEB6.Models;

namespace ITWEB6.Dtos
{
    public class ProgramDto
    {
      public int Id { get; set; }
      public string Name { get; set; }
      public List<ExerciseDto> Exercises { get; set; }
      public string Creater { get; set; }
      public string Category { get; set; }
      public DateTime CreateDate { get; set; }
      public ApplicationUser ApplicationUser { get; set; }
      public string ApplicationUserId { get; set; }
  }
}
