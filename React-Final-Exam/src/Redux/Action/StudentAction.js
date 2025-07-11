// src/Redux/Action/StudentAction.js

import axios from "axios";


export const fetchStudents = () => async (dispatch) => {
  dispatch({ type: "FETCH_STUDENTS_REQUEST" });

  try {
    const res = await axios.get("http://localhost:8000/students");
    dispatch({ type: "FETCH_STUDENTS_SUCCESS", payload: res.data });
  } catch (error) {
    dispatch({ type: "FETCH_STUDENTS_FAILURE", payload: error.message });
  }
};

export const addStudent = (student) => async (dispatch) => {
  try {
    await axios.post("http://localhost:8000/students", student);
    dispatch(fetchStudents()); // ✅ student list को fetch करो
  } catch (error) {
    console.error("Error adding student:", error);
  }
};



export const updateStudent = (student) => async (dispatch) => {
  try {
    await axios.put(`http://localhost:8000/students/${student.id}`, student);
    dispatch(fetchStudents()); // Refresh list
  } catch (err) {
    console.error("Update error", err.message);
  }
};
