import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
const Update = () => {
  const user_data = {
    username: "",
    email: "",
  };
  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);

  const [inputData, setInputData] = useState(user_data);
  const inputHandler = (e) => {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
  };
  const fetchData = async () => {
    try {
      const response = await fetch(`http://localhost:3030/users/${id}`, {
        method: "GET",
        mode: "cors",
      });

      const user_data = await response.json();
      setInputData(user_data);
      //   navigate("/");
    } catch (err) {
      console.log("Error", err);
    }
  };
  useEffect(() => {
    fetchData();
  }, [id]);
  const submitData = async (e) => {
    try {
      e.preventDefault();
      fetch(`http://localhost:3030/users/${id}`, {
        method: "PUT",

        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: inputData.username,
          email: inputData.email,
        }),
      });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  //   submitData();
  return (
    <div>
      <div>
        <form className="container mt-5" onSubmit={submitData}>
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
          <button className="btn btn-info" type="submit">
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

export default Update;
