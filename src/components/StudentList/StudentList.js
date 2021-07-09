import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
import EditStudent from "../EditStudent/EditStudent";

const StudentList = () => {
  const [studentList, setStudentList] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetch("https://serene-falls-75245.herokuapp.com/studentList")
      .then((res) => res.json())
      .then((data) => setStudentList(data));
  }, [studentList]);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const handleDelete = (id) => {
    fetch("https://serene-falls-75245.herokuapp.com/delete?id=" + id, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };
  return (
    <div className="p-5 outer-area">
      <div className="interior">
        <h3>Student list</h3>
        {
          <table class="table table-striped mt-5">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Date of Birth</th>
                <th scope="col">Subjects</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((item) => (
                <tr>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                  <td>{item.dateOfBirth}</td>
                  <td>{item.subject.join(",")}</td>
                  <td>
                    <EditStudent
                      modalIsOpen={modalIsOpen}
                      closeModal={closeModal}
                      name={item.name}
                    />
                    <FontAwesomeIcon
                      className="text-success me-3"
                      icon={faEdit}
                      onClick={openModal}
                    />
                    {
                      <FontAwesomeIcon
                        className="text-danger"
                        icon={faTrash}
                        onClick={() => handleDelete(`${item._id}`)}
                      />
                    }
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        }
      </div>
    </div>
  );
};

export default StudentList;
