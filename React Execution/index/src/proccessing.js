import axios from 'axios'

export const getNotes = async ()=>
{
    try{
        var response= await axios.get("https://localhost:44340/notesApi");
        return response.data;
    }
    catch(e)
    {
        console.error(e);
    }
}

export const getNote = async (id)=>
    {
        try{
            var response= await axios.get("https://localhost:44340/notesApi/" + id);
            return response.data;
        }
        catch(e)
        {
            console.error(e);
        }
    }

export const parseNote = async(note)=>
{
    try{
        var response=await axios.post("https://localhost:44340/notesApi/", note);
        return response.status;
    }
    catch(e){
        console.error(e)
    }
}

export const editNote = async(id, note)=>
{
    try {
        var response = await axios.post("https://localhost:44340/notesApi/" + id, note);
        return response.status;
    } catch (e) {
        console.error(e)
    }
}

export const deleteNote = async(id)=>
{
    try {
        await axios.delete("https://localhost:44340/notesApi/" + id);
    } catch (e) {
        console.error(e);
    }
}

