import { useState } from "react";
import './createform.css'
import {parseNote} from 'C:/Users/Юрий/Desktop/рофлокоды/NotesApp/React Execution/index/src/proccessing.js'
import { useNavigate } from "react-router-dom";

function CreateForm()
{
    async function onSub()
    {
        function clearContext()
        {
            var values=document.querySelectorAll('input[type=textarea]');
            for(let i=0; i<values.length; i++)
            {
                values[i].value=null;
            }
            setNote(null);
        }

        function displayStatus()
        {
            let message=Status===200?"Note has been created!":"Something went wrong..";
            alert(message);
        }

        const Status=await parseNote(note);
        displayStatus();
        clearContext();
    }
    const [note, setNote]=useState(null);

    const navigate=useNavigate();

    return(
        <>
        <div className="crForm">
        <div className="crFormTitle">
            <h1>Create Note</h1>
        </div>
        <div className="cont">
            <div className="rowName">
                <h2>Title</h2>
            </div>
            <div className="rowInput">
                <input type="textarea" id="title" placeholder="Enter your title here" maxLength="25" onChange={(e)=> setNote({...note, title:e.target.value})}></input>
            </div>
        </div>
        <div className="cont">
            <div className="rowName">
            <h2>Description</h2>
            </div>
            <div className="rowInput">
            <input type="textarea" id="desc" placeholder="Enter your description here" maxLength="95" onChange={(e)=> setNote({...note, desc:e.target.value})}></input>
            </div>
        </div>
        <div className="crButton">
            <button onClick={()=> onSub()}>Submit</button>
        </div>
        </div>
        <div className="backButtonArea">
            <div className="butt">
            <button onClick={()=> navigate("/")}>Back</button>
            </div>
        </div>
        </>
    )
}

export default CreateForm;