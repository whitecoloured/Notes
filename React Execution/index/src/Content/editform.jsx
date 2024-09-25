import { useState, useEffect } from "react";
import {getNote, editNote} from 'C:/Users/Юрий/Desktop/рофлокоды/NotesApp/React Execution/index/src/proccessing.js'
import './editform.css'
import { useLocation, useNavigate } from "react-router-dom";

function EditForm()
{
    async function OnEdit()
    {
        let status = await editNote(id, note);
        let message=status===200?"Note has been changed!":"Something went wrong..";
        alert(message);
    }
    const [note, setNote]=useState(null);
    const [loading, setLoading]=useState(false);

    const location=useLocation();
    const id=location.state.index;

    const navigate=useNavigate();

    useEffect(()=>
    {
        const fetchData= async()=>
        {
            var response= await getNote(id);
            setNote(response);
        }
        fetchData();
        if (note)
        {
            setLoading(true);
        }
    },[!note])


    return(
        <>
        {loading&&
        <>
        <div className="edForm">
        <div className="edFormTitle">
            <h1>Edit Note</h1>
        </div>
        <div className="edCont">
            <div className="edRowName">
                <h2>Title</h2>
            </div>
            <div className="edRowInput">
                <input type="textarea" id="title" placeholder="Enter your title here" maxLength="25" value={note.title} onChange={(e)=> setNote({...note, title:e.target.value})}></input>
            </div>
        </div>
        <div className="edCont">
            <div className="edRowName">
            <h2>Description</h2>
            </div>
            <div className="edRowInput">
            <input type="textarea" id="desc" placeholder="Enter your description here" maxLength="95" value={note.desc} onChange={(e)=> setNote({...note, desc:e.target.value})}></input>
            </div>
        </div>
        <div className="edButton">
            <button onClick={()=> OnEdit()}>Submit</button>
        </div>
        </div>
        <div className="edBackButtonArea">
            <div className="edButt">
            <button onClick={()=> navigate("/curnote", {state:{index:id}})}>Back</button>
            </div>
        </div></>}
        </>
    )
}

export default EditForm;