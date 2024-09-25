import { useEffect, useState } from 'react'
import moment from 'moment'
import './currentnote.css'
import {getNote} from 'C:/Users/Юрий/Desktop/рофлокоды/NotesApp/React Execution/index/src/proccessing.js'
import { useLocation, useNavigate } from 'react-router-dom'

export default function CurrentNote()
{   

    const dateFormat="DD/MM/YYYY HH:mm";

    const [note, setNote]=useState({});
    
    const location=useLocation();
    const id=location.state.index;

    const navigate=useNavigate();

    useEffect(()=>
    {
        const fetchNote = async()=>
        {
            var response= await getNote(id);
            setNote(response);
        }
        fetchNote();
    },[])
    return(
        <>
        <div className='displayNote'>
            <div className='curnote'>
                <div className='curnoteHeader'>
                    <h1>{note.title}</h1>
                </div>
                <div className='curnoteContent'>
                    {note.desc}
                </div>
                <div className='curnoteFooter'>
                    <small>Создано: {moment(note.date).format(dateFormat)}</small>
                    {note.changedDate?<small>Изменено: {moment(note.changedDate).format(dateFormat)}</small>:null}
                </div>
            </div>
        </div>
        <div className='displayButtons'>
            <button onClick={()=> navigate("editnote", {state:{index:id}})}>Edit</button>
            <button onClick={()=> navigate("deletenote", {state:{index:id}})}>Delete</button>
            <button onClick={()=> navigate("/")}>Back</button>
        </div>
        </>

    )
}