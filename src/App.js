import React from "react";
import Student from "./StudentPage/student";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import StudentList from "./FullClassList/studentlist";


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index path="/*" element={<StudentList />} />
          <Route exact path="/StudentDetails/student" element={<Student />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
