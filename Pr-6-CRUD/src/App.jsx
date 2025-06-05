import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
function App() {
  const [editId, setEditId] = useState(null);

  const [allRecord, setAllRecord] = useState(
    localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")) : []
  );

  const [formInput, setFormInput] = useState({
    name: "",
    position: "",
    status: "",
    interviewDate: [],
  });

  const changeInput = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      if (checked) {
        setFormInput({
          ...formInput,
          interviewDate: [...formInput.interviewDate, value],
        });
      } else {
        setFormInput({
          ...formInput,
          interviewDate: [
            ...formInput.interviewDate.filter((val) => val !== value),
          ],
        });
      }
    } else {
      setFormInput({
        ...formInput,
        [name]: value,
      });
    }
  };
  const deleteButton = (id) => {
    let oldRecord = allRecord.filter((val) => val.id !== id);
    setAllRecord(oldRecord);
    localStorage.setItem("user", JSON.stringify(oldRecord));
    alert("Record Deleted Successfully");
  };

  const editButton = (id) => {
    let oldRecord = allRecord.find((val) => val.id === id);
    setFormInput(oldRecord);
    setEditId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editId) {
      let oldRecord = allRecord.map((val) => {
        if (val.id === editId) {
          return {
            ...val,
            ...formInput,
          };
        }
        return val;
      });
      setAllRecord(oldRecord);
      localStorage.setItem("user", JSON.stringify(oldRecord));
      setEditId(null);

      setFormInput({
        name: "",
        position: "",
        status: "",
        interviewDate: [],
      });

      return;
    }
    const obj = {
      id: Math.floor(Math.random() * 1000),
      ...formInput,
    };
    let oldRecord = [...allRecord, obj];
    setAllRecord(oldRecord);
    localStorage.setItem("user", JSON.stringify(oldRecord));
    console.log(allRecord);

    setFormInput({
      name: "",
      position: "",
      status: "",
      interviewDate: [],
    });
  };

  return (
    <div className="app-wrapper">
      <header className="app-header">
        <h2>🚀 Job Applications Tracker</h2>
        <p>Track all your job candidates efficiently</p>
      </header>

      <main className="app-main container my-4">
        <form onSubmit={handleSubmit}>
          <table border={1}>
            <thead>
              <tr>
                <td>Candidate Name</td>
                <td>
                  <input
                    type="text"
                    name="name"
                    value={formInput.name}
                    onChange={changeInput}
                    placeholder="Enter Candidate Name"
                  />
                </td>
              </tr>
              <tr>
                <td>Position Applied</td>
                <td>
                  <select
                    name="position"
                    value={formInput.position}
                    onChange={changeInput}
                  >
                    <option value="Select Position">
                      ---Select Position---
                    </option>
                    <option value="Frontend Developer">
                      Frontend Developer
                    </option>
                    <option value="Backend Developer">Backend Developer</option>
                    <option value="Fullstack Developer">
                      Fullstack Developer
                    </option>
                    <option value="UI/UX Designer"> UI/UX Designer</option>
                  </select>
                </td>
              </tr>
              <tr>
                <td>Interview Scheduled</td>
                <td>
                  <table>
                    <tr>
                      <td>
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={formInput.interviewDate.includes(
                              "Scheduled"
                            )}
                            name="interviewDate"
                            value="Scheduled"
                            onChange={changeInput}
                          />{" "}
                          Scheduled
                        </label>
                      </td>
                      <td>
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={formInput.interviewDate.includes(
                              "Rescheduled"
                            )}
                            name="interviewDate"
                            value="Rescheduled"
                            onChange={changeInput}
                          />{" "}
                          Rescheduled
                        </label>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={formInput.interviewDate.includes(
                              "cancelled"
                            )}
                            name="interviewDate"
                            value="cancelled"
                            onChange={changeInput}
                          />{" "}
                          Cancelled
                        </label>
                      </td>
                      <td>
                        <label className="checkbox-label">
                          <input
                            type="checkbox"
                            checked={formInput.interviewDate.includes(
                              "No Scheduled"
                            )}
                            name="interviewDate"
                            value="No Scheduled"
                            onChange={changeInput}
                          />{" "}
                          No Scheduled
                        </label>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>

              <tr>
                <td>Application Status</td>
                <td>
                  <select
                    name="status"
                    value={formInput.status}
                    onChange={changeInput}
                  >
                    <option value="Select Status">---Select Status---</option>
                    <option value="Pending">Pending</option>
                    <option value="Offer">Offer</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                </td>
              </tr>

              <tr>
                <td></td>
                <td>
                  <input type="submit" value="Submit" />
                </td>
              </tr>
            </thead>
          </table>

          <h1 align="center " style={{ marginTop: "20px" }}>View Data</h1>
          <table border={1}>
            <thead>
              <tr>
                <th>Id</th>
                <th>Candidate Name</th>
                <th>Position Applied</th>
                <th>Interview Scheduled</th>
                <th>Application Status</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {allRecord.map((val, index) => {
                return (
                  <tr key={index}>
                    <td>{val.id}</td>
                    <td>{val.name}</td>
                    <td>{val.position}</td>
                    <td>{val.interviewDate.join(", ")}</td>
                    <td>{val.status}</td>
                    <td>
                      <button type="button" onClick={() => editButton(val.id)}>
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => deleteButton(val.id)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </form>
      </main>
      <footer className="app-footer text-center py-3">
        <small>
          © {new Date().getFullYear()} Divyang Rawal. All Rights Reserved.
        </small>
      </footer>
    </div>
  );
}

export default App;
