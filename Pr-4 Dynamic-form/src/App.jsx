import { useState } from "react";
import "./App.css"; // Custom CSS
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

function App() {
  const [input, setInput] = useState([{ name: "", email: "", salary: "" }]);

  const addForm = () => {
    setInput([...input, { name: "", email: "", salary: "" }]);
  };

  const handleInput = (index, event) => {
    const data = [...input];
    data[index][event.target.name] = event.target.value;
    setInput(data);
  };

  const handleSubmit = () => {
    console.log(input);
    alert("Form submitted! Check the console.");
  };

  const removeForm = (index) => {
    const updated = input.filter((_, i) => i !== index);
    setInput(updated);
    alert("Removed successfully!");
  };

  return (
    <div className="container py-5">
      <div className="card shadow-lg">
        <div className="card-body">
          <h1 className="text-center text-primary mb-3">Dynamic Form</h1>
          <p className="text-center text-muted mb-4">React - Add & Delete Rows Dynamically</p>

          {input.map((item, index) => (
            <div className="form-section border rounded p-3 mb-4" key={index}>
              <div className="row g-3">
                <div className="col-md-4">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter Full Name"
                    value={item.name}
                    onChange={(e) => handleInput(index, e)}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter Email"
                    value={item.email}
                    onChange={(e) => handleInput(index, e)}
                  />
                </div>
                <div className="col-md-3">
                  <input
                    type="number"
                    name="salary"
                    className="form-control"
                    placeholder="Enter Salary"
                    value={item.salary}
                    onChange={(e) => handleInput(index, e)}
                  />
                </div>
                {index !== 0 && (
                  <div className="col-md-1 d-flex align-items-center">
                    <button
                      type="button"
                      className="btn btn-danger btn-sm"
                      onClick={() => removeForm(index)}
                    >
                      ✖
                    </button>
                  </div>
                )}
              </div>
            </div>
          ))}

          <div className="text-center">
            <button className="btn btn-success me-2" onClick={addForm}>
              ➕ Add
            </button>
            <button className="btn btn-primary" onClick={handleSubmit}>
              🚀 Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
