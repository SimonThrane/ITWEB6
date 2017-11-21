using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using ITWEB6;

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

            var program = await _context.Programs.SingleOrDefaultAsync(m => m.Id == id);

            if (program == null)
            {
                return NotFound();
            }

            return Ok(program);
        }

        // PUT: api/Programs/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutProgram([FromRoute] int id, [FromBody] Models.Program program)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != program.Id)
            {
                return BadRequest();
            }

            _context.Entry(program).State = EntityState.Modified;

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