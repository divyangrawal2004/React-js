import Form from "./Form";
import View from "./View";
import { useState } from "react";

function App() {
  const [allRecord, setAllRecord] = useState(
    localStorage.getItem("users")
      ? JSON.parse(localStorage.getItem("users"))
      : []
  ); //purane data ko lane ke lia

  const [editId, setEditId] = useState("");
  const [formInput, setFormInput] = useState({
    username: "",
    useremail: "",
    userpassword: "",
    usergender: "",
    usercourses: [],
  });

  const changeInput = (e) => {
    const { name, value, type, checked } = e.target;

    if (type == "checkbox") {
      if (checked) {
        setFormInput({
          ...formInput,
          usercourses: [...formInput.usercourses, value],
        });
      } else {
        setFormInput({
          ...formInput,
          usercourses: [
            ...formInput.usercourses.filter((course) => course !== value),
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

  const deleteRecord = (index) => {
    let newRecord = allRecord.filter((val, i) => i !== index);
    setAllRecord(newRecord);
    localStorage.setItem("users", JSON.stringify(newRecord));
  };

  const editButton = (index) => {
    let record = allRecord.find((val, i) => i === index);
    setFormInput(record);
    setEditId(index);
  };

  const handleSubmit = () => {
  
    console.log(formInput);
    if (editId !== "") {
      alert("record updated");
      let up = allRecord.map((val, i) => {
        if (i === editId) {
          return { ...formInput };
        } else {
          return val;
        }
      });
      setAllRecord(up);
      localStorage.setItem("users", JSON.stringify(up));
      setEditId("");
    } else {
        alert("form submitted");
      let oldRecord = [...allRecord, formInput];
      setAllRecord(oldRecord);
      localStorage.setItem("users", JSON.stringify(oldRecord));

      setFormInput({
        username: "",
        useremail: "",
        userpassword: "",
        usergender: "",
        usercourses: [],
      });
    }
  };

  return (
    <>
      <Form
        allRecords={allRecord}
        setAllRecords={setAllRecord}
        changeInput={changeInput}
        formInput={formInput}
        setFormInput={setFormInput}
        handleSubmit={handleSubmit}
      />
      <br />
      <br />
      <View
        allRecords={allRecord}
        deleteRecord={deleteRecord}
        editButton={editButton}
      />
    </>
  );
}

export default App;
