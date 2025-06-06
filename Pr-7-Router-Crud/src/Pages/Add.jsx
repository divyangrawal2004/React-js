import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
//bootstrap css
import { Container, Card, Form, Button, Row, Col } from 'react-bootstrap';
//add css
import './add.css';

const Add = () => {
  const navigate = useNavigate();
  const [allRecords, setAllRecords] = useState(localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : []);
  const [formInput, setFormInput] = useState({
    name: '',
    position: '',
    interviewDate: [],
    status: ''
  });

 const changeInput = (e) => {
    const{name,value , checked , type} = e.target

    if(type === 'checkbox'){
      if(checked){
        setFormInput({
          ...formInput,
          [name]:[...formInput[name],value]
        })

      }else{
        setFormInput({
          ...formInput,
          [name]:[...formInput[name].filter((item) => item !== value)]
        })
      }
    }else {
       setFormInput({
      ...formInput,
      [name]:value
    })

    }

   
  }
  const newId = { id: allRecords.length + 1, ...formInput };

  const handleSubmit = (e) => {
    e.preventDefault();
    const oldRecord = [...allRecords, newId];
    setAllRecords(oldRecord);
    localStorage.setItem('user', JSON.stringify(oldRecord));
    navigate('/view');
  };

  return (
     <Container className="py-5">
      <Card className="p-4 shadow-lg border-0 rounded-4" style={{ maxWidth: "600px", margin: "0 ", background: "#f8f9fa" }}>
        <h2 className="text-center mb-4 text-primary fw-bold">🚀 Add Candidate</h2>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Candidate Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Candidate Name"
              value={formInput.name}
              onChange={changeInput}
              className="rounded-3"
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Position Applied</Form.Label>
            <Form.Select
              name="position"
              value={formInput.position}
              onChange={changeInput}
              className="rounded-3"
              required
            >
              <option value="">--- Select Position ---</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Fullstack Developer">Fullstack Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label className="fw-semibold">Interview Scheduled</Form.Label>
            <div className="d-flex flex-wrap gap-3">
              {["scheduled", "rescheduled", "cancelled", "noshow"].map((val) => (
                <Form.Check
                  key={val}
                  inline
                  type="checkbox"
                  label={val.charAt(0).toUpperCase() + val.slice(1)}
                  name="interviewDate"
                  value={val}
                  checked={formInput.interviewDate.includes(val)}
                  onChange={changeInput}
                />
              ))}
            </div>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label className="fw-semibold">Application Status</Form.Label>
            <Form.Select
              name="status"
              value={formInput.status}
              onChange={changeInput}
              className="rounded-3"
              required
            >
              <option value="">--- Select Status ---</option>
              <option value="Selected">Selected</option>
              <option value="Rejected">Rejected</option>
              <option value="On Hold">On Hold</option>
              <option value="Pending">Pending</option>
            </Form.Select>
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100 fw-bold rounded-pill">
            Submit Application
          </Button>
        </Form>
      </Card>
    </Container>
  );
};

export default Add;
