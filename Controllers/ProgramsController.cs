using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ITWEB6;
using ITWEB6.Dtos;
using ITWEB6.Models;

namespace ITWEB6.Controllers
{
  [Produces("application/json")]
  [Route("api/Programs")]
  public class ProgramsController : Controller
  {
    private readonly Models.FitnessBoysContext _context;

    public ProgramsController(Models.FitnessBoysContext context)
    {
      _context = context;
    }

    // GET: api/Programs
    [HttpGet]
    public IEnumerable<Models.Program> GetPrograms()
    {
      return _context.Programs.ToList();
    }

    // GET: api/Programs/5
    [HttpGet("{id}")]
    public async Task<IActionResult> GetProgram([FromRoute] int id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var program = await _context.Programs
        .Include(p => p.ProgramExercises)
        .ThenInclude(pe => pe.Exercise)
        .SingleOrDefaultAsync(m => m.Id == id);

      if (program == null)
      {
        return NotFound();
      }

      //map to DTO
      var programDto = new ProgramDto
      {
        Name = program.Name,
        ApplicationUser = program.ApplicationUser,
        ApplicationUserId = program.ApplicationUserId,
        Id = program.Id,
        Creater = program.Creater,
        CreateDate = program.CreateDate,
        Category = program.Category,
        Exercises = new List<ExerciseDto>()
      };

      foreach (var pe in program.ProgramExercises)
      {
        programDto.Exercises.Add(new ExerciseDto
        {
          Id = pe.Exercise.Id,
          Name = pe.Exercise.Name,
          Sets = pe.Exercise.Sets,
          Description = pe.Exercise.Description,
          Time = pe.Exercise.Time,
          IsRepetition = pe.Exercise.IsRepetition,
          Repetitions = pe.Exercise.Repetitions
        });
      }

      return Ok(programDto);
    }

    // PUT: api/Programs/5
    [HttpPut("{id}")]
    public async Task<IActionResult> PutProgram([FromRoute] int id, [FromBody] UpdateProgramDto program)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      if (id != program.Id)
      {
        return BadRequest();
      }

      //Should be validated in a real app
      var pe = new ProgramExercise
      {
        ProgramId = id,
        ExerciseId = program.Exercises.First()
      };

      _context.ProgramExercises.Add(pe);

      try
      {
        await _context.SaveChangesAsync();
      }
      catch (DbUpdateConcurrencyException)
      {
        if (!ProgramExists(id))
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

    // POST: api/Programs
    [HttpPost]
    public async Task<IActionResult> PostProgram([FromBody] Models.Program program)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      _context.Programs.Add(program);
      await _context.SaveChangesAsync();

      return CreatedAtAction("GetProgram", new { id = program.Id }, program);
    }

    // DELETE: api/Programs/5
    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteProgram([FromRoute] int id)
    {
      if (!ModelState.IsValid)
      {
        return BadRequest(ModelState);
      }

      var program = await _context.Programs.SingleOrDefaultAsync(m => m.Id == id);
      if (program == null)
      {
        return NotFound();
      }

      _context.Programs.Remove(program);
      await _context.SaveChangesAsync();

      return Ok(program);
    }

    private bool ProgramExists(int id)
    {
      return _context.Programs.Any(e => e.Id == id);
    }
  }
}
