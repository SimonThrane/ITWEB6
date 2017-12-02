using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ITWEB6.Models;
using ITWEB6.Dtos;

namespace ITWEB6.Controllers
{
  [Produces("application/json")]
  [Route("api/Exercises")]
  public class ExercisesController : Controller
  {
    private readonly FitnessBoysContext _context;

    public ExercisesController(FitnessBoysContext context)
    {
      _context = context;
    }

    // GET: api/Exercises
    [HttpGet]
    public IEnumerable<Exercise> GetExercises()
    {
      return _context.Exercises;
    }

    // GET: api/Exercises/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetExercise([FromRoute] int id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var exercise = await _context.Exercises.SingleOrDefaultAsync(m => m.Id == id);

      if (exercise == null)
      {
        return NotFound();
      }

      return Ok(exercise);
    }

    // PUT: api/Exercises/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutExercise([FromRoute] int id, [FromBody] Exercise exercise)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      if (id != exercise.Id)
      {
        return BadRequest();
      }

      _context.Entry(exercise).State = EntityState.Modified;

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ExerciseExists(id))
        {
          return NotFound();
        }
        else
        {
          throw;
        }
      }

      return NoContent();
    }

    // POST: api/Exercises
    [HttpPost]
    public async Task<IActionResult> PostExercise([FromBody] ExerciseDto exercise)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var newExercise = new Exercise
      {
        Name = exercise.Name,
        Sets = exercise.Sets,
        Repetitions = exercise.Repetitions.GetValueOrDefault(),
        Description = exercise.Description,
        IsRepetition = exercise.IsRepetition,
        Time = exercise.Time.GetValueOrDefault()
      };

      _context.Exercises.Add(newExercise);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetExercise", new { id = exercise.Id }, exercise);
    }

    // DELETE: api/Exercises/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteExercise([FromRoute] int id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var exercise = await _context.Exercises.SingleOrDefaultAsync(m => m.Id == id);
      if (exercise == null)
      {
        return NotFound();
      }

      _context.Exercises.Remove(exercise);
      await _context.SaveChangesAsync();

      return Ok(exercise);
    }

    private bool ExerciseExists(int id)
    {
      return _context.Exercises.Any(e => e.Id == id);
    }
  }
}
