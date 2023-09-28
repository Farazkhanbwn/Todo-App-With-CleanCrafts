import React from "react";
import CreateTodo from "./TodoCreate";
import TodoList from "./TodoList";
import { useTodoContext } from "../../Context/TodoContext";
import UpdateTodos from "./UpdateTodo";
function TodoComponent() {
  const {
    todoList,
    createTodo,
    deleteTodo,
    updateUserData,
    updateUserCurrentValue,
    updateTodo,
  } = useTodoContext();
  console.log("Todo Component Re-rendered");
  return (
    <>
      <CreateTodo createTodo={createTodo} />
      <UpdateTodos
        updateUserCurrentValue={updateUserCurrentValue}
        UpdateTodo={updateTodo}
      />
      <TodoList
        todoList={todoList}
        deleteTodo={deleteTodo}
        updateUserData={updateUserData}
      />
    </>
  );
}

export default TodoComponent;
