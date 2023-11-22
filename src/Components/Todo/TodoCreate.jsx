import React, { useState } from "react";

function CreateTodo({ createTodo }) {
  const [userName, setUserName] = useState("");
  const [price, setPrice] = useState("");
  const [adding, setAdding] = useState(false);

  const addNewUser = () => {
    setAdding(!adding);
    createTodo(userName, price, () => {
      setUserName("");
      setPrice("");
      setAdding(false);
    });
  };
  return (
    <div>
      <h3>Create User</h3>
      <input
        type="text"
        value={userName}
        placeholder="Enter Name"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <br></br>
      <br></br>

      {/* Price */}
      <input
        type="text"
        placeholder="Enter Price"
        value={price}
        onChange={(e) => {
          setPrice(e.target.value);
        }}
      />
      <br></br>
      <br></br>
      <button disabled={adding} onClick={addNewUser}>
        {adding ? "Adding..." : "Add"}
      </button>
    </div>
  );
}

export default CreateTodo;
