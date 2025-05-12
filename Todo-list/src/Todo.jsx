import React, { useState } from 'react'

const Todo = () => {

    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[update,setUpdate]=useState("");
    const[record,setRecord]=useState([]);

    const handleSubmit=(e)=>{
        e.preventDefault()

        if(!name || !email){
            alert("Please enter name and email");
            return false;
        }

        if(update){
            const updateRecord=record.map((data)=>{
                return data.id === update ? {id:update,name:name,email:email} : data;
            })
            setRecord(updateRecord);
            alert("Record Updated");
            setName("");
            setEmail("");
            setUpdate("");
            return false;
        }else{
          const ifDup=record.some((data)=>data.name===name || data.email===email);
          if(ifDup){
            alert("Record already exist");
            return false;
          }
        }

        const newRecord=[...record,{id:Math.floor(Math.random()*111111),name:name,email:email}]
        setRecord(newRecord);
        setName("");
        setEmail("");
        alert("Record Added");
    }

    const handleUpdate=(id)=>{
      const update=record.find((data)=>data.id===id);
      setName(update.name);
      setEmail(update.email);
      setUpdate(id);
    }

    const handleDelete=(id)=>{
      const deletedata=record.filter((data)=>data.id != id);
      setRecord(deletedata);
      alert("Record Deleted");
    }
  return (
    <div align="center">
      <h1>Todo list component</h1>
      <form onSubmit={handleSubmit}>
      <label>Enter Name:- </label>
      <input type="text" placeholder='Enter Name' value={name} onChange={(e)=>setName(e.target.value)} />
      <br /><br />
      <label>Enter Email:- </label>
      <input type="email" placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)} />
      <br /><br />
      {
        update ? <button>Update</button> : <button>Add</button>
      }
      </form>
      <h2>All Record</h2>
      <table border={1}>
        <thead>
            <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
            </tr>
        </thead>
        <tbody>
      {
        record.map((val,index)=>{
            const{id,name,email}=val;
            return(
                <>
                    <tr key={index}>
                        <td>{index+1}</td>
                        <td>{name}</td>
                        <td>{email}</td>
                        <td>
                            <button onClick={()=>handleUpdate(id)}>Edit</button>
                            <button onClick={()=>handleDelete(id)}>Delete</button>
                        </td>
                    </tr>
                </>
            )
        })
      }
      </tbody>
      </table>
      <br /><br />
      <button onClick={()=>{
        setRecord([]);
        alert("All record deleted");
      }}>Remove All Task</button>
      
    </div>
  )
}

export default Todo
