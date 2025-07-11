import axios from 'axios';

const deleteStudent = async (id) => {
  await axios.delete(`http://localhost:8000/students/${id}`);
  alert("Deleted");
};

export default deleteStudent;


