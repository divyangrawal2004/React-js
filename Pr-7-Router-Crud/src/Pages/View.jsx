import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Table, Container, Button, Card } from 'react-bootstrap';

const View = () => {
  const navigate = useNavigate();
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('user')) || [];
    setRecords(data);
  }, []);

  const editUser = (id) => {
    navigate(`/edit/${id}`);
  };

  const deleteRecord = (id) => {
    const filtered = records.filter(val => val.id !== id);
    setRecords(filtered);
    localStorage.setItem('user', JSON.stringify(filtered));
  };

  return (
    <Container>
      <Card className="shadow p-4">
        <Card.Title className="text-center mb-4">Candidate List</Card.Title>
        {records.length === 0 ? (
          <p className="text-center">No records found. Please add some candidates.</p>
        ) : (
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Candidate Name</th>
                <th>Position</th>
                <th>Interview Status</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {records.map((val, index) => (
                <tr key={val.id}>
                  <td>{index + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.position}</td>
                  <td>{val.interviewDate.join(', ')}</td>
                  <td>{val.status}</td>
                  <td>
                    <Button
                      variant="warning"
                      size="sm"
                      className="me-2"
                      onClick={() => editUser(val.id)}
                    >
                      Edit
                    </Button>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => deleteRecord(val.id)}
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        )}
        <div className="text-center mt-3">
          <Link to="/" className="btn btn-primary">Add New Candidate</Link>
        </div>
      </Card>
    </Container>
  );
};

export default View;
