using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ITWEB6.Models
{
    public class Activity
    {
        public int Id { get; set; }
        public string Comment { get; set; }
        public DateTime Date { get; set; }
        public Program Program { get; set; }
        public int ProgramId { get; set; }

  }
}
