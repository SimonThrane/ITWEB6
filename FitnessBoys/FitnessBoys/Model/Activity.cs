using System;

namespace FitnessBoys.Model
{
    public class Activity
    {
        public int Id { get; set; }
        public string Comment { get; set; }
        public DateTime Date { get; set; }
        public Program Program { get; set; }
    }
}