using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace NotesAPI.Models
{
    
    public class Notes
    {
        [Key]
        public int id { get; set; }
        [MaxLength(30)]
        public string title { get; set; }
        [MaxLength(100)]
        public string desc { get; set; }
        public DateTime date { get; set; }
        public DateTime? changedDate { get; set; }
        public Notes()
        {
            date = DateTime.Now;
        }
    }
}
