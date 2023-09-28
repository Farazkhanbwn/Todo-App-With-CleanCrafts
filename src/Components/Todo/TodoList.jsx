import React from "react";
import TodoRow from "./TodoRow";

function TodoList({ todoList, deleteTodo, updateUserData }) {
  return (
    <div>
      <h2>Student Information</h2>
      <table border="1px" cellPadding="5px">
        <tbody>
          <tr>
            <td>Id</td>
            <td>Name</td>
            <td>Price</td>
            <td>Operations</td>
          </tr>
          {todoList.map((todo) => {
            return (
              <TodoRow
                {...todo}
                deletetodo={deleteTodo}
                key={todo.id}
                updateUserData={updateUserData}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default TodoList;
