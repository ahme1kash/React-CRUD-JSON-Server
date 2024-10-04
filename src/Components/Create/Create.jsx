import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
const Create = () => {
  const user_data = {
    username: "",
    email: "",
  };
  const navigate = useNavigate();
  const [inputData, setInputData] = useState(user_data);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const handleSubmit = async (e) => {
    const submit = async () => {
      try {
        e.preventDefault();
        await fetch("http://localhost:3030/users", {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({
            username: inputData.username,
            email: inputData.email,
          }),
        });
        console.log(inputData);
        navigate("/");
      } catch (err) {
        console.log("Error", err);
      }
    };
    submit();
  };
  return (
    <div>
      <div>
        <form className="container mt-5">
          <div className="col-sm-5">
            <label htmlFor="username">Name</label>
            <input
              type="text"
              id="username"
              name="username"
              className="form-control"
              onChange={inputHandler}
              value={inputData.username}
            />
          </div>
          <div className="col-sm-5">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="form-control"
              onChange={inputHandler}
              value={inputData.email}
            />
          </div>
          <br />
          <button className="btn btn-info" type="button" onClick={handleSubmit}>
            Submit
          </button>
          <br />
          <br />
          <br />
          <div>
            <Link to="/">
              <button className=" btn btn-dark"> Back</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Create;
