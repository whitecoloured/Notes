using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using NotesAPI.Models;
namespace NotesAPI.Context
{
    public class NotesDbContext : DbContext
    {
        public DbSet<Notes> Notes { get; set; }


        public NotesDbContext(DbContextOptions<NotesDbContext> options) : base(options)
        {
        }
    }
}
