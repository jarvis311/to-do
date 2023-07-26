import React, { useEffect, useState } from "react";
import axios from "axios";
const UserAddTodo = () => {

  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [dueDate, setDueDate] = useState("");

  const onSubmitForm = (e) => {
    e.preventDefault()
    const addData = async () => {
      await axios.post("http://localhost:8000/api/todo", {
        title,
        desc,
        dueDate,
        userId: 1,
      });
    };
    addData();
  };
  return (
    <div>
      <form className="user-form" onSubmit={onSubmitForm}>
        <h1>Add Todo</h1>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">
            Title
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name={title}
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" class="form-label">
            Description
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputPassword1"
            name={desc}
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" class="form-label">
            Deu Date
          </label>
          <input
            type="date"
            class="form-control"
            id="exampleInputPassword1"
            name={dueDate}
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserAddTodo;
