using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace NotesAPI.Dto_s
{
    public record NotesDto(string Title=null, string Desc=null);
}
