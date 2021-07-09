import React, { useState, useEffect } from "react";
import "./AddStudent.css";

const AddStudent = () => {
  const [info, setInfo] = useState({});
  const [selectedSub, setSelectedSub] = useState([]);
  const [subjects, setSubjects] = useState([]);

  useEffect(() => {
    fetch("https://serene-falls-75245.herokuapp.com/subjects")
      .then((res) => res.json())
      .then((data) => setSubjects(data));
  }, []);

  const handleBlur = (e) => {
    e.preventDefault();
    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };

  const handleSelect = (name) => {
    const newSubject = [...selectedSub, name];
    setSelectedSub(newSubject);
  };

  const handleSubmit = (e) => {
    const studentInfo = {
      ...info,
      subject: selectedSub,
    };

    const url = `https://serene-falls-75245.herokuapp.com/addStudent`;

    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(studentInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data) {
          alert("one student added successfully");
        }
      });
  };

  return (
    <div className="p-5 outer-area">
      <div className="interior">
        <h2>Add Student</h2>
        <form className="mt-5" action="" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name">
                <strong>Name</strong>
              </label>
              <input
                onBlur={handleBlur}
                name="name"
                type="text"
                className="form-control mb-4"
                placeholder="Name"
              />

              <label htmlFor="email">
                <strong>Email</strong>
              </label>
              <input
                onBlur={handleBlur}
                name="email"
                type="email"
                className="form-control mb-4"
                placeholder="Email"
              />

              <label htmlFor="">
                <strong className="me-3">Subject :</strong>
              </label>
              {subjects.map((item) => (
                <>
                  <input
                    type="checkbox"
                    id={item._id}
                    name={item.subject}
                    value={item.subject}
                    onClick={() => handleSelect(item.subject)}
                  />
                  <label for="" className="me-3">
                    {" "}
                    {item.subject}
                  </label>
                </>
              ))}
            </div>
            <div className="col-md-6">
              <label htmlFor="phone">
                <strong>Phone</strong>
              </label>
              <input
                onBlur={handleBlur}
                name="phone"
                type="number"
                className="form-control mb-4"
                placeholder="Phone"
              />

              <label htmlFor="Email">
                <strong>Date Of Birth</strong>
              </label>
              <input
                onBlur={handleBlur}
                name="dateOfBirth"
                type="date"
                className="form-control mb-4"
                placeholder="Date of Birth"
              />
            </div>
          </div>

          <div className="right-side-btn">
            <input className="add-btn" type="submit" value="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddStudent;
