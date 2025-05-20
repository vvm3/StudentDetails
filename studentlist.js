import React, { useEffect, useState } from 'react';
import studentData from "../Data/studentData.json";
import { useNavigate } from 'react-router-dom';

function StudentList() {
  const navigate = useNavigate();

  const [sname, setSname] = useState([]);
  const [sname2, setSname2] = useState({
    srno: "",
    name: "",
    address: "",
    age: "",
    bloodGroup: "",
    email: ""
  });

  useEffect(() => {
    const stored = localStorage.getItem("students");
    if (stored) {
      setSname(JSON.parse(stored));
    } else {
      setSname(studentData.students);
      localStorage.setItem("students", JSON.stringify(studentData.students));
    }
  }, []);

  const clickfun = (student) => {
    navigate("/student", { state: student });
  };

  const textChange = (e) => {
    const { name, value } = e.target;
    setSname2((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const add = () => {
    if (!sname2.name.trim()) return;

    const newStudent = {
      srno: (sname.length + 1).toString(),
      name: sname2.name,
      address: sname2.address,
      age: sname2.age,
      bloodGroup: sname2.bloodGroup,
      email: sname2.email
    };

    const updatedList = [...sname, newStudent];
    setSname(updatedList);
    localStorage.setItem("students", JSON.stringify(updatedList));

    setSname2({
      srno: "",
      name: "",
      address: "",
      age: "",
      bloodGroup: "",
      email: ""
    });
  };

  return (
    <div>
      <h2>Student List</h2>
      <table border="1" cellPadding="5">
        <thead>
          <tr>
            <th>Sr.No</th>
            <th>Name</th>
          </tr>
        </thead>
        <tbody>
          {sname.map((student) => (
            <tr key={student.srno}>
              <td>{student.srno}</td>
              <td>
                <span
                  style={{ cursor: "pointer", color: "blue", textDecoration: "underline" }}
                  onClick={() => clickfun(student)}
                >
                  {student.name}
                </span>
              </td>
            </tr>
          ))}
          <tr>
            <td>{sname.length + 1}</td>
            <td>
              <input
                type="text"
                placeholder="Enter name"
                name="name"
                value={sname2.name}
                onChange={textChange}
              />
              <button onClick={add}>Add</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
