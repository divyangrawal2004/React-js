import { getDatabase, onValue, ref, remove } from "firebase/database";
import React, { useEffect, useState } from "react";
import { app } from "../../Firebase";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Add.css";
import { Link, useNavigate } from "react-router-dom";

const View = () => {
  const [allUser, setAllUser] = useState([]);
  const navigate = useNavigate();

  const db = getDatabase(app);

  const getUser = () => {
    const allRecords = ref(db, "users");
    onValue(allRecords, (row) => {
      setAllUser(row.val());
      console.log(row.val());
    });
  };

  const deleteUser = (id) => {
    const deleteData = ref(db, `users/${id}`);
    remove(deleteData);
    getUser();
  };

  const editButton = (id, name, company, email, number, message) => {
    const data = { id, name, company, email, number, message };
    navigate("/edit", { state: data });
  };

  useEffect(() => {
    getUser();
  }, []);

  return (
    <div className="container mt-5">
      <Link to="/" className="btn btn-danger">
        Add Page
      </Link>
      <h2 className="text-center text-danger fw-bold mb-4">View User Data</h2>

      <div className="table-responsive">
        <table className="table table-bordered table-hover text-center shadow">
          <thead className="table-danger">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Company</th>
              <th>Email</th>
              <th>Phone Number</th>
              <th>Message</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {allUser ? (
              Object.entries(allUser).map(([key, value], index) => (
                <tr key={key}>
                  <td>{index + 1}</td>
                  <td>{value.name}</td>
                  <td>{value.company}</td>
                  <td>{value.email}</td>
                  <td>{value.number}</td>
                  <td>{value.message}</td>
                  <td>
                    <button className="btn btn-outline-danger btn-sm fw-semibold shadow-sm" onClick={() => deleteUser(key)}>Delete</button>&nbsp;&nbsp;&nbsp;
                   <button className="btn btn-outline-success btn-sm fw-semibold shadow-sm" onClick={() => editButton(key, value.name, value.company, value.email, value.number, value.message)}>Edit</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={6}>No data found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default View;
