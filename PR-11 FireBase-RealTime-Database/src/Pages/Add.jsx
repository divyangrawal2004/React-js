import React, { useState } from 'react';
import './Add.css'; // Custom CSS for styles
import 'bootstrap/dist/css/bootstrap.min.css';
import { app } from '../../Firebase';
import { getDatabase, ref, set } from "firebase/database";
import { Link, useNavigate } from 'react-router-dom';

const Add = () => {
    const [formInput,setFormInput] = useState(
        {
            name: '',
            company: '',
            email: '',
            number: '',
            message: ''
        }
    )
    const navigate = useNavigate()

    const changeInput = (e) => {
        const { name, value } = e.target
        setFormInput({
            ...formInput,
            [name]: value
        })
    }

    const db = getDatabase(app)

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formInput);

        let obj = {
            userId : Math.floor(Math.random() * 10000),
            ...formInput
        }

        set(ref(db,`users/${obj.userId}`),{
            userId: obj.userId,
            name: formInput.name,
            company: formInput.company,
            email: formInput.email,
            number: formInput.number,
            message: formInput.message
        }).then(() => {
            alert('Form submitted successfully')
            setFormInput({
                name: '',
                company: '',
                email: '',
                number: '',
                message: ''
            })
            navigate('/view')
        }).catch((err) => {
            console.log(err);
            return false
        })
    }
  return (
    <div className="container mt-5">
         <h1 align="center">Add Page</h1>
      <div className="card shadow-lg border-0">
       
        <div className="row g-0">
          {/* Left Panel */}
          <div className="col-md-4 bg-danger text-white p-4">
            <h5 className="fw-bold mb-3">Sample Company</h5>
            <p>Address</p>
            <p>Phone Number</p>
            <p>Email</p>
          </div>

          {/* Right Panel */}
          <div className="col-md-8 p-4">
            <h5 className="fw-bold mb-4">Email Us</h5>
            <form onSubmit={handleSubmit}>
              <div className="row mb-3">
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-danger"
                    placeholder="Name" name='name' onChange={changeInput} value={formInput.name}
                  />
                </div>
                <div className="col">
                  <input
                    type="text"
                    className="form-control border-danger"
                    placeholder="Company"  name='company' onChange={changeInput} value={formInput.company}
                  />
                </div>
              </div>

              <div className="row mb-3">
                <div className="col">
                  <input
                    type="email"
                    className="form-control border-danger"
                    placeholder="Email Address"  name='email' onChange={changeInput} value={formInput.email}
                  />
                </div>
                <div className="col">
                  <input
                    type="tel"
                    className="form-control border-danger"
                    placeholder="Phone Number"  name='number' onChange={changeInput} value={formInput.number}
                  />
                </div>
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control border-danger"
                  rows="4"
                  placeholder="Message"  name='message' onChange={changeInput} value={formInput.message}
                ></textarea>
              </div>

              <button type="submit" className="btn btn-danger w-100">
                SUBMIT
              </button>
              <Link to='/view' className='btn btn-danger w-100 mt-3'>View</Link>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Add;
