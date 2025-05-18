import React, { useState } from 'react';
import studentData from "../Data/studentData.json";
import { useNavigate } from 'react-router-dom';
// import student from '../StudentPage/student';

function StudentList() {
  const navigate = useNavigate();
  const clickfun = (student) => {
    navigate("/student", { state: student });
  }

  const [sname, setSname] = useState(studentData.students);
  const[sname2, setSname2] = useState(
    {
      srno: "",
      name: "",
      address: "",
      age: "",
      bloodGroup: "",
      email: ""
    }
  );

const textChange = (e) =>{
  const val = e.target.value;
  const name = e.target.name;
  setSname2((prev)=>({
      ...prev,
      [name] : val
  }));
}

 const add = (e) =>{
      if(sname2 !== ""){
        const newStudnet = {
          srno : (sname.length + 1 ).toString(),
          name: sname2.name,
          address: sname2.address,
          age: sname2.age,
          bloodGroup: sname2.bloodGroup,
          email: sname2.email
        }

        setSname([...sname, newStudnet]);
        setSname2({
          srno: "",
          name: "",
          address: "",
          age: "",
          bloodGroup: "",
          email: ""
        });
      }
  }
 


  return (
    <div>
      <h2>Student List</h2>
      <table>
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
                <a Style={"cursor:pointer"} onClick={() => { clickfun(student) }}>{student.name}</a>
              </td>
            </tr>
          ))}
          <tr>
            <input type='text' placeholder='add one more studnet' name='name' onChange={textChange}/>
            <button onClick={add}>add</button>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default StudentList;
