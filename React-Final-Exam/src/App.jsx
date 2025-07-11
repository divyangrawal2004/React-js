import { BrowserRouter, Routes, Route } from 'react-router-dom';
import StudentList from './Components/StudentList';
import StudentForm from './Components/StudentForm';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import PrivateRoute from './Components/PrivateRoot';
import StudentDetails from './Components/StudentDetails';
import RegisterForm from './Components/RegisterForm';

const App = () => {
  return (
    <BrowserRouter> 
      <Navbar />
      <Routes>
        {/* 🔓 Public route */}
        <Route path='/' element = {<RegisterForm/>}/>
        <Route path="/login" element={<Login />} />

        {/* 🔐 Private routes */}
          <Route 
          path="/add" 
          element={
            <PrivateRoute>
              <StudentForm />
            </PrivateRoute>
          } 
        />
        <Route 
          path="/students" 
          element={
            <PrivateRoute>
              <StudentList />
            </PrivateRoute>
          } 
        />

      
        <Route path="/edit/:id" element={<PrivateRoute><StudentDetails /></PrivateRoute>} />
      </Routes> 
    </BrowserRouter>
  );
};

export default App;
