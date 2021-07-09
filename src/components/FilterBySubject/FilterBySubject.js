import React, { useEffect, useState } from "react";

const FilterBySubject = () => {
  const [subjects, setSubjects] = useState([]);
  const [filteredSubjects, setFilteredSubjects] = useState([]);
  const [subject, setSubject] = useState("bangla");

  useEffect(() => {
    fetch("https://serene-falls-75245.herokuapp.com/subjects")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);

  useEffect(() => {
    fetch(
      "https://serene-falls-75245.herokuapp.com/subjectList?subject=" + subject
    )
      .then((res) => res.json())
      .then((data) => setFilteredSubjects(data));
  }, [subject]);

  const handleSubjectChange = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className="p-5 outer-area">
      <div className="interior">
        <div className="mb-5">
          <h4 className="text-center">Filtered By Subject</h4>
          <h2>Select Subject</h2>
          <select
            onChange={handleSubjectChange}
            class="form-select w-25"
            aria-label="Default select example"
          >
            {subjects.map((item) => (
              <option value={item.subject}>{item.subject}</option>
            ))}
          </select>
        </div>
        <div>
          <h2 className="mb-3">Filtered By Subject</h2>
          {
            <table class="table table-striped">
              <thead>
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Email</th>
                  <th scope="col">Phone</th>
                  <th scope="col">Date of Birth</th>
                  <th scope="col">Subjects</th>
                </tr>
              </thead>
              <tbody>
                {filteredSubjects.map((item) => (
                  <tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.dateOfBirth}</td>
                    <td>{item.subject.join(",")}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          }
        </div>
      </div>
    </div>
  );
};

export default FilterBySubject;
