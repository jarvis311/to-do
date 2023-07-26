import axios from "axios";
import React, { useState } from "react";

const UserLoginForm = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const onSubmitForm = (e) => {
    e.preventDefault()
    const addData = async () => {
     const response = await axios.post("http://localhost:8000/api/auth/signin", {
       username,password
      });
      localStorage.setItem("user",JSON.stringify(response.data.user.token))
    };

    addData();
  };
  return (
    <div>
      <form className="user-form" onSubmit={onSubmitForm}>
        <h1>Login Here</h1>
        <div class="mb-3">
          <label htmlFor="exampleInputEmail1" class="form-label">
            username
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name={username}
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />    
        </div>
        <div class="mb-3">
          <label htmlFor="exampleInputPassword1" class="form-label">
            Password
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
            name={password}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default UserLoginForm;
