import React, { useEffect, useState } from "react";

function UpdateTodo({ updateUserCurrentValue, UpdateTodo }) {
  const { name, price, id } = updateUserCurrentValue;
  // console.log("value for name is : " + name + "value for price " + price);
  const [userName, setUserName] = useState("");
  const [userPrice, setUserPrice] = useState("");
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    setUserName(name);
    setUserPrice(price);
  }, [name, price]);

  const updateValueToDB = (userId) => {
    setUpdate(true);
    UpdateTodo(userName, userPrice, userId, () => {
      setUserName("");
      setUserPrice("");
      setUpdate(false);
    });
  };
  return (
    <div>
      <h3>Update User</h3>
      <input
        value={userName}
        type="text"
        placeholder="Name Here"
        onChange={(e) => {
          setUserName(e.target.value);
        }}
      />
      <input
        value={userPrice}
        type="text"
        placeholder="Price Here"
        onChange={(e) => {
          setUserPrice(e.target.value);
        }}
      />
      <button
        disabled={update}
        onClick={() => {
          updateValueToDB(id);
        }}
      >
        {update ? "updating..." : "update"}
      </button>
    </div>
  );
}

export default UpdateTodo;
