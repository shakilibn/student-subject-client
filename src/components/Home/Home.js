import React from "react";
import AddStudent from "../AddStudent/AddStudent";
import AddSubject from "../AddSubject/AddSubject";
import FilterBySubject from "../FilterBySubject/FilterBySubject";
import StudentList from "../StudentList/StudentList";

const Home = () => {
  return (
    <div>
      <AddSubject />
      <AddStudent />
      <StudentList />
      <FilterBySubject />
    </div>
  );
};

export default Home;
