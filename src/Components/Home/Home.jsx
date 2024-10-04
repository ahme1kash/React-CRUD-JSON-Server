import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try {
      const response = await fetch("http://localhost:3030/users");
      const respone_data = await response.json();
      setData(respone_data);
    } catch (err) {
      console.log(err);
    }
  };
  const deleteData = async (id) => {
    console.log(id);
    try {
      await fetch(`http://localhost:3030/users/${id}`, {
        method: "DELETE",
      });
      setData((prevUser) => {
        return prevUser.filter((user) => user.id !== id);
      });
      alert("User Deleted Successfully");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container mt-5">
      <Link to="/new">
        <button className=" btn btn-dark"> Add New User</button>
      </Link>
      <br />
      <br />
      <table className="table table-dark table-striped">
        <thead>
          <tr>
            <th scope="col"> ID</th>
            <th scope="col"> Name</th>
            <th scope="col"> Email</th>
            <th scope="col"> Delete</th>
            <th scope="col"> Update</th>
          </tr>
        </thead>

        <tbody>
          {data.map((val, idx) => {
            return (
              <tr key={val.id}>
                <td>{val.id}</td>
                <td>{val.username}</td>
                <td>{val.email}</td>
                <td
                  onClick={() => deleteData(val.id)}
                  style={{ cursor: "pointer" }}
                >
                  🗑️
                </td>
                <td>
                  <Link to={`/edit/${val.id}`} className="editLink">
                    ✏️
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
