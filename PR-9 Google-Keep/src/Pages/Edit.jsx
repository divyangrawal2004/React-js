import React, { useEffect, useState } from "react";
import "./Add.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { EDIT_NOTE } from "../Redux/Action/CrudAction";


const Edit = () => {

    const {id} = useParams()
    const navigate = useNavigate()



    const dispatch = useDispatch()
    const data = useSelector(state => state.notes.notes)

    const [noteInput,setNoteInput] = useState({
        title : "",
        note : ""
    })

    const changeInput = (e) => {
        const {name,value} = e.target
        setNoteInput({
            ...noteInput,
            [name] : value
        })
    }

    useEffect(() => {
       let editUser = data.find((val) => {
        return val.id == id
       })
       setNoteInput(editUser)

    },[id])

    const handleSubmit = (e) => {
        e.preventDefault() 
        alert("Note Added Successfully")
      
        dispatch(EDIT_NOTE(noteInput))

        navigate("/")

        setNoteInput({
            title:"",
            note:""
        })
    }

    return (
        <div className="container">
            <div className="header">
                <img
                    src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
                    alt="Keep Logo"
                />
                <h1>Google Keep</h1>
            </div>
            <h1 align= "center" style={{fontSize:"40px", marginTop: "20px"}}>Edit-Page</h1>

            <div className="main">
                   
                <form className="note-card" onSubmit={handleSubmit}>
                 
                    <input type="text" placeholder="Title" name="title" onChange={changeInput} value={noteInput.title}/>
                    <textarea rows={4} placeholder="Write a note..." name="note" onChange={changeInput} value={noteInput.note}/>
                    <button type="submit" className="add-icon">➕</button>
                </form>
            </div>

            <div className="footer">Copyrights 2025</div>
        </div>
    )
}

export default Edit;