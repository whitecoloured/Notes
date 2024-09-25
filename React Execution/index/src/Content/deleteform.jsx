import {getNote, deleteNote} from 'C:/Users/Юрий/Desktop/рофлокоды/NotesApp/React Execution/index/src/proccessing.js'
import { useState, useEffect } from 'react'
import './deleteform.css'
import { useLocation, useNavigate } from 'react-router-dom';

function DeleteForm()
{
    async function onDelete()
    {
        await deleteNote(id);
        navigate("/");
    }

    const [title, setTitle]=useState(null);
    const [loading, setLoading]=useState(false);

    const location=useLocation();
    const id=location.state.index;

    const navigate=useNavigate();

    useEffect(()=>
    {
        const getData= async()=>
        {
            var response=await getNote(id);
            setTitle(response.title);
        }
        if(title)
        {
            setLoading(true)
        }
        getData();
    },[!title]);
    
    return(
        <>
        {loading&&
            <div className='delForm'>
                <h1>Are you sure you want to delete the note with '{title}' title?</h1>
                <div className='buttArea'>
                    <button onClick={()=> onDelete()}>Delete</button>
                    <button onClick={()=> navigate("/curnote", {state:{index:id}})} style={{backgroundColor:'gray'}}>
                        <span style={{color:'black'}}>Back</span>
                        </button>
                </div>
            </div>}
            </>
        )
}

export default DeleteForm;