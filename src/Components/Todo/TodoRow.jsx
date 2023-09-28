import React from "react";
import { useState } from "react";

function TodoRow({ id, name, price, deletetodo, updateUserData }) {
  const [deleting, setDeleting] = useState(false);
  const deleteTodoAction = () => {
    console.log("id for user is = " + id);
    setDeleting(true);
    deletetodo(id, () => {
      setDeleting(false);
    });
  };

  const updateUser = (userId) => {
    console.log("id for user is = " + userId);
    updateUserData(userId);
  };

  return (
    <tr key={id}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{price}</td>
      <td>
        <button disabled={deleting} onClick={deleteTodoAction}>
          {deleting ? "deleting..." : "delete"}
        </button>
      </td>
      <td>
        <button
          onClick={() => {
            updateUser(id);
          }}
        >
          update
        </button>
      </td>
    </tr>
  );
}

export default TodoRow;
