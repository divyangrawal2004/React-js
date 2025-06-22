import React, { useState } from "react";
import "./Add.css";
import { useDispatch, useSelector } from "react-redux";
import { DELETE_NOTE } from "../Redux/Action/CrudAction";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.notes.notes);

  const [noteInput, setNoteInput] = useState({
    title: "",
    note: "",
  });

  const changeInput = (e) => {
    const { name, value } = e.target;
    setNoteInput({
      ...noteInput,
      [name]: value,
    });
  };

  const editNote = (id) => {
    navigate(`/edit/${id}`);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Note Added Successfully");

    let obj = {
      id: Math.floor(Math.random() * 1000),
      ...noteInput,
    };
    const allData = [...data, obj];
    dispatch({
      type: "ADD_NOTE",
      payload: allData,
    });

    setNoteInput({
      title: "",
      note: "",
    });
  };

  return (
    <div className="container">
      <div className="header">
        <img
          src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png"
          alt="Keep Logo"
        />
        <h1>Google Keep</h1>
      </div>

      <div className="main">
        <form className="note-card" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            name="title"
            onChange={changeInput}
            value={noteInput.title}
          />
          <textarea
            rows={4}
            placeholder="Write a note..."
            name="note"
            onChange={changeInput}
            value={noteInput.note}
          />
          <button type="submit" className="add-icon">
            ➕
          </button>
        </form>
      </div>

      {/* map ghumaya h */}

      <div className="view-wrapper">
        {data.map((val) => (
          <div className="note-card" key={val.id}>
            <h3>{val.title}</h3>
            <p>{val.note}</p>
            <div className="button-group">
              <button
                className="action-btn delete-btn"
                onClick={() => dispatch(DELETE_NOTE(val.id))}
              >
                🗑️
              </button>
              <button
                className="action-btn edit-btn"
                onClick={() => editNote(val.id)}
              >
                ✏️
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="footer">Copyrights 2025</div>
    </div>
  );
};

export default Add;
