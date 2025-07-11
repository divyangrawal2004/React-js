import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addStudent, updateStudent } from '../Redux/Action/StudentAction';
import { useLocation, useNavigate } from 'react-router-dom';

const StudentForm = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const editingStudent = location.state?.student || null;

  const [student, setStudent] = useState({
    name: '',
    roll: '',
    class: ''
  });

  useEffect(() => {
    if (editingStudent) {
      setStudent(editingStudent);
    }
  }, [editingStudent]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!student.name || !student.roll || !student.class) {
      alert("Please fill all fields");
      return;
    }

    if (editingStudent) {
      dispatch(updateStudent(student));
      alert("Student Updated");
    } else {
      dispatch(addStudent(student));
      alert("Student Added");
    }

    navigate('/students'); // ✅ Redirect after submit
  };

  return (
    <form onSubmit={handleSubmit} className="container mt-4">
      <h2>{editingStudent ? 'Edit Student' : 'Add Student'}</h2>
      <input
        type="text"
        placeholder="Name"
        className="form-control mb-2"
        value={student.name}
        onChange={(e) => setStudent({ ...student, name: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Roll No"
        className="form-control mb-2"
        value={student.roll}
        onChange={(e) => setStudent({ ...student, roll: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Class"
        className="form-control mb-2"
        value={student.class}
        onChange={(e) => setStudent({ ...student, class: e.target.value })}
        required
      />
      <button type="submit" className="btn btn-primary">
        {editingStudent ? 'Update' : 'Add'}
      </button>
    </form>
  );
};

export default StudentForm;
