import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Table, Container, Button, Card } from 'react-bootstrap';

const View = () => {
  const navigate = useNavigate();
  
  const [records, setRecords] = useState([]);
  //shorting krne ke lia state
  const [sort, setSort] = useState(true);

  // searching state
  const [search, setSearch] = useState({
    name: '',
    position: '',
    interviewDate: '',
    status: ''
  });

  const handleFilter = (e) => {
    setSearch({
      ...search,
      [e.target.name]: e.target.value
    });
  };

 const filteredRecords = records.filter((val) => {
  return (
    val.name.toLowerCase().includes(search.name.toLowerCase()) &&
    val.position.toLowerCase().includes(search.position.toLowerCase()) &&
    val.interviewDate.join(', ').toLowerCase().includes(search.interviewDate.toLowerCase()) &&
    val.status.toLowerCase().includes(search.status.toLowerCase())
  );
});

    const handleSort = () => {
        const sortedRecords = [...filteredRecords].sort((a, b) => {
            const A = a.name.toLowerCase();
            const B= b.name.toLowerCase();

            if(A> B){
                return sort ? 1 : -1;
            }else{
                return sort ? -1 : 1;
            }
        });
        setRecords(sortedRecords);
        localStorage.setItem('user', JSON.stringify(sortedRecords));
        setSort(!sort);
    }

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
        <>

  <Card.Body className="mb-3">
  <h5 className="mb-3">Filter Candidates</h5>
  <div className="mb-3">
    <div className="row g-2">
      <div className="col-md-3">
        <input  type="text" className="form-control" placeholder="Search by Name"  name="name"  value={search.name}onChange={handleFilter}  />
      </div>
      <div className="col-md-3">
        <input   type="text"  className="form-control"  placeholder="Search by Position"  name="position" value={search.position} onChange={handleFilter} />
      </div>
      <div className="col-md-3">
        <input  type="text" className="form-control"  placeholder="Search by Interview Date"  name="interviewDate" value={search.interviewDate}   onChange={handleFilter}  />
      </div>
      <div className="col-md-3">
        <input   type="text"className="form-control"  placeholder="Search by Status"   name="status" value={search.status}  onChange={handleFilter} />
      </div>
    </div>
  </div>
</Card.Body>

            
          <Table striped bordered hover responsive>
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th onClick={() => handleSort()} style={{ cursor: 'pointer' }} >Candidate Name</th>
                <th>Position</th>
                <th>Interview Status</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredRecords.map((val, index) => (
                <tr key={val.id}>
                  <td>{index + 1}</td>
                  <td>{val.name}</td>
                  <td>{val.position}</td>
                  <td>{val.interviewDate.join(', ')}</td>
                  <td>{val.status}</td>
                  <td>
                    <Button  variant="warning"  size="sm"  className="me-2"  onClick={() => editUser(val.id)} >   Edit  </Button>
                    <Button  variant="danger" size="sm"    onClick={() => deleteRecord(val.id)}  >  Delete </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </>
        )}
        <div className="text-center mt-3">
          <Link to="/" className="btn btn-primary">Add New Candidate</Link>
        </div>
      </Card>
    </Container>
  );
};

export default View;
