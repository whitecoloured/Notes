using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using NotesAPI.Context;
using NotesAPI.Models;
using NotesAPI.Dto_s;

namespace NotesAPI.Controllers
{
    [ApiController]
    [Route("notesApi")]
    public class NotesController : ControllerBase
    {
        private readonly NotesDbContext _context;

        public NotesController(NotesDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> Get()
        {
            var notes = await Task.Run(()=>_context.Notes.ToList());
            return Ok(notes);
        }
        [HttpPost]
        public async Task<IActionResult> Create(NotesDto DTO)
        {
            Notes note = new Notes() { title = DTO.Title, desc = DTO.Desc };
            await _context.Notes.AddAsync(note);
            await _context.SaveChangesAsync();
            return Ok();
        }
        [HttpGet]
        [Route("{id}")]
        public async Task<IActionResult> GetOne(int id)
        {
            var data = await Task.Run(() => _context.Notes.FirstOrDefault(n => n.id == id));
            if (data != null)
            {
                return Ok(data);
            }
            else return NotFound();
        }
        [HttpPost]
        [Route("{id}")]
        public async Task<IActionResult> Edit(int id, NotesDto DTO)
        {
            var data = await Task.Run(()=>_context.Notes.FirstOrDefault(n => n.id == id));
            if (data != null)
            {
                if (DTO.Title==null || DTO.Desc==null || DTO.Title.Trim()=="" || DTO.Desc.Trim()=="")
                {
                    return BadRequest();
                }
                data.title = DTO.Title;
                data.desc = DTO.Desc;
                data.changedDate = DateTime.Now;
                _context.Notes.Update(data);
                await _context.SaveChangesAsync();
                return Ok(data);
            }
            else return NotFound();
        }
        [HttpDelete]
        [Route("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            var note = _context.Notes.FirstOrDefault(n => n.id==id);
            _context.Notes.Remove(note);
            await _context.SaveChangesAsync();
            return Ok();
        }

    }
}
