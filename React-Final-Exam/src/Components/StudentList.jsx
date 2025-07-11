// ✅ src/Components/StudentList.jsx
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchStudents } from '../Redux/Action/StudentAction';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const StudentList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { data, loading, error } = useSelector((state) => state.students);

  const [sortField, setSortField] = useState('');
  const [filterClass, setFilterClass] = useState('');
  const [filterName, setFilterName] = useState('');
  const [sortedData, setSortedData] = useState([]);

  useEffect(() => {
    dispatch(fetchStudents());
  }, [dispatch]);

  useEffect(() => {
    let filtered = [...data];

    if (filterClass) {
      filtered = filtered.filter((stu) =>
        stu.class.toLowerCase().includes(filterClass.toLowerCase())
      );
    }

    if (filterName) {
      filtered = filtered.filter((stu) =>
        stu.name.toLowerCase().includes(filterName.toLowerCase())
      );
    }

    if (sortField === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortField === 'roll') {
      filtered.sort((a, b) => a.roll.localeCompare(b.roll));
    }

    setSortedData(filtered);
  }, [data, sortField, filterClass, filterName]);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this student?")) {
      try {
        await axios.delete(`http://localhost:8000/students/${id}`);
        dispatch(fetchStudents());
        alert("Student deleted successfully");
      } catch (err) {
        alert("Failed to delete student");
        console.error(err);
      }
    }
  };

  const handleEdit = (student) => {
    navigate('/add', { state: { student } });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">📋 Student List</h2>

      {/* Sorting and Filtering UI */}
      <div className="d-flex justify-content-between flex-wrap gap-3 mb-3">
        <div>
          <label className="me-2">Sort By:</label>
          <select onChange={(e) => setSortField(e.target.value)} className="form-select d-inline-block w-auto">
            <option value="">None</option>
            <option value="name">Name</option>
            <option value="roll">Roll No</option>
          </select>
        </div>

        <div>
          <label className="me-2">Filter by Class:</label>
          <input
            type="text"
            className="form-control d-inline-block w-auto"
            placeholder="Enter class..."
            value={filterClass}
            onChange={(e) => setFilterClass(e.target.value)}
          />
        </div>

        <div>
          <label className="me-2">Filter by Name:</label>
          <input
            type="text"
            className="form-control d-inline-block w-auto"
            placeholder="Enter name..."
            value={filterName}
            onChange={(e) => setFilterName(e.target.value)}
          />
        </div>
      </div>

      {loading && <p className="text-primary">Loading...</p>}
      {error && <p className="text-danger">Error: {error}</p>}

      {sortedData.length > 0 ? (
        <div className="table-responsive">
          <table className="table table-bordered table-striped">
            <thead className="table-dark">
              <tr align="center">
                <th>Id</th>
                <th>Name</th>
                <th>Roll No</th>
                <th>Class</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody align="center">
              {sortedData.map((stu, index) => (
                <tr key={stu.id}>
                  <td>{index + 1}</td>
                  <td>{stu.name}</td>
                  <td>{stu.roll}</td>
                  <td>{stu.class}</td>
                  <td className="d-flex justify-content-center">
                    <button
                      onClick={() => handleEdit(stu)}
                      className="btn btn-warning btn-sm me-2"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(stu.id)}
                      className="btn btn-danger btn-sm"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p className="text-muted">No students found.</p>
      )}
    </div>
  );
};

export default StudentList;
