import { useEffect, useState } from 'react'
import './content.css'
import './note.css'
import {getNotes} from 'C:/Users/Юрий/Desktop/рофлокоды/NotesApp/React Execution/index/src/proccessing.js'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'


function Note({id,title, desc, date, changedate})
{

    const navigate=useNavigate();

    const dateFormat="DD/MM/YYYY HH:mm"
    return(
        <div className='note'>
            <div className='noteHeader' onClick={()=> navigate("/curnote", {state: {index:id}})}>
                <h1>{title}</h1>
            </div>
            <div className='noteContent'>
                {desc}
            </div>
            <div className='noteFooter'>
                <small>Создано: {moment(date).format(dateFormat)}</small>
                {changedate? <small>Изменено: {moment(changedate).format(dateFormat)}</small>: null}
            </div>
        </div>
    )
}

function Notes()
{
    const [notes, setNotes]=useState([]);
    useEffect(()=>
    {
        const fetchData= async()=>
        {
            var response= await getNotes();
            setNotes(response);
        }
        fetchData();
    },[])
    const mapNotes=notes.map(n=>
        <Note key={n.id}
            id={n.id}
            title={n.title}
            desc={n.desc}
            date={n.date}
            changedate={n.changedDate}
            />
    )
    return(
        <main>
            <div className='contentContainer'>
                {mapNotes}
            </div>
        </main>
    )
}


function Content()
{   
    return(
        <Notes/>
    )
}
export default Content;