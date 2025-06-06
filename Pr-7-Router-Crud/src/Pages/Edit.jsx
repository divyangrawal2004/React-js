import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import {Container,Card,Form,Button,Row,Col,} from 'react-bootstrap';

const Edit = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [allRecords, setAllRecords] = useState( localStorage.getItem('user') ? JSON.parse(localStorage.getItem('user')) : [] );

  const [formInput, setFormInput] = useState({
    name: '',
    position: '',
    interviewDate: [],
    status: '',
  });

  useEffect(() => {
    let single = allRecords.find((val) => val.id == id);
    if (single) {
      setFormInput(single);
    }
  }, [id, allRecords]);

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
  const handleSubmit = (e) => {
    e.preventDefault();
    const updateRecord = allRecords.map((val) =>
      val.id == id ? { ...val, ...formInput } : val
    );
    setAllRecords(updateRecord);
    localStorage.setItem('user', JSON.stringify(updateRecord));
    navigate('/view');
  };

  return (
    <Container>
      <Card className="shadow p-4 mt-4">
        <Card.Title className="text-center mb-4">Edit Candidate</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Candidate Name</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter name"
              value={formInput.name}
              onChange={changeInput}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Position Applied</Form.Label>
            <Form.Select
              name="position"
              value={formInput.position}
              onChange={changeInput}
              required
            >
              <option value="">---Select Position---</option>
              <option value="Frontend Developer">Frontend Developer</option>
              <option value="Backend Developer">Backend Developer</option>
              <option value="Fullstack Developer">Fullstack Developer</option>
              <option value="UI/UX Designer">UI/UX Designer</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Interview Status</Form.Label>
            <Row>
              {['scheduled', 'rescheduled', 'cancelled', 'noshow'].map((status) => (
                <Col xs={6} md={3} key={status}>
                  <Form.Check
                    type="checkbox"
                    label={status.charAt(0).toUpperCase() + status.slice(1)}
                    name="interviewDate"
                    value={status}
                    checked={formInput.interviewDate.includes(status)}
                    onChange={changeInput}
                  />
                </Col>
              ))}
            </Row>
          </Form.Group>

          <Form.Group className="mb-4">
            <Form.Label>Application Status</Form.Label>
            <Form.Select name="status"value={formInput.status}onChange={changeInput}required >
              <option value="">---Select Status---</option>
              <option value="Selected">Selected</option>
              <option value="Rejected">Rejected</option>
              <option value="On Hold">On Hold</option>
              <option value="Pending">Pending</option>
            </Form.Select>
          </Form.Group>

          <div className="d-flex justify-content-between">
            <Button variant="success" type="submit">
              Save Changes
            </Button>
            <Link to="/view" className="btn btn-secondary">
              Back to View
            </Link>
          </div>
        </Form>
      </Card>
    </Container>
  );
};

export default Edit;
