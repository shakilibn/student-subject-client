import React, { useState } from "react";

const AddSubject = () => {
  const [info, setInfo] = useState({});

  const handleBlur = (e) => {
    e.preventDefault();

    const newInfo = { ...info };
    newInfo[e.target.name] = e.target.value;
    setInfo(newInfo);
  };
  const handleSubmit = (e) => {
    const url = `https://serene-falls-75245.herokuapp.com/addSubject`;
    fetch(url, {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <div className="p-5 outer-area">
      <div className="interior">
        <h2>Add Subject</h2>
        <form className="mt-5" action="" onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="subject">
                <strong>Subject</strong>
              </label>
              <input
                onBlur={handleBlur}
                name="subject"
                type="text"
                className="form-control mb-4"
                placeholder="Subject"
              />
            </div>
            <div className="col-md-6"></div>
          </div>

          <div className="right-side-btn">
            <input className="add-btn" type="submit" value="submit" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSubject;
