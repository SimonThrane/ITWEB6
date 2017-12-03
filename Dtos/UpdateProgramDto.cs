using ITWEB6.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITWEB6.Dtos
{
  public class UpdateProgramDto
  {
    public int Id { get; set; }
    public string Name { get; set; }
    public List<int> Exercises { get; set; }
    public string Creater { get; set; }
    public string Category { get; set; }
    public DateTime CreateDate { get; set; }
    public ApplicationUser ApplicationUser { get; set; }
    public string ApplicationUserId { get; set; }
  }
}
